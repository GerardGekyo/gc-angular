import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { CodeBlockComponent } from '../code-block/code-block.component';

@Component({
  selector: 'doc-example-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CodeBlockComponent],
  templateUrl: './example-section-tabs.component.html',
  styleUrl: './example-section-tabs.component.css',
})
export class ExampleSectionTabsComponent {
  readonly title = input.required<string>();
  readonly description = input<string>();
  readonly htmlCode = input.required<string>();
  readonly tsCode = input.required<string>();

  protected readonly activeTab = signal<'html' | 'ts'>('html');
}
