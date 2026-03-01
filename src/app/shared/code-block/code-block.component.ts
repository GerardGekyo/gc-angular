import { Component, computed, inject, input, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import typescript from 'highlight.js/lib/languages/typescript';

hljs.registerLanguage('xml', xml);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('typescript', typescript);

@Component({
  selector: 'doc-code-block',
  templateUrl: './code-block.component.html',
  styleUrl: './code-block.component.css',
})
export class CodeBlockComponent {
  private readonly sanitizer = inject(DomSanitizer);

  readonly code = input.required<string>();
  /** 'html' | 'typescript' | 'auto' */
  readonly language = input<string>('html');

  protected readonly copied = signal(false);

  protected readonly highlightedCode = computed((): SafeHtml => {
    const code = this.code();
    const lang = this.language();
    let result: string;
    try {
      if (lang === 'auto') {
        result = hljs.highlightAuto(code).value;
      } else {
        result = hljs.highlight(code, { language: lang }).value;
      }
    } catch {
      // Fallback: escape HTML entities
      result = code
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    }
    return this.sanitizer.bypassSecurityTrustHtml(result);
  });

  protected copyCode(): void {
    navigator.clipboard.writeText(this.code());
    this.copied.set(true);
    setTimeout(() => this.copied.set(false), 2000);
  }
}
