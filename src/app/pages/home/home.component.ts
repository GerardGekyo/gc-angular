import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardComponent, BadgeComponent } from 'garaq-angular-components';
import {
  CATEGORIES,
  BLOCK_CATEGORIES,
  BLOCK_REGISTRY,
  getComponentsByCategory,
  getBlocksByCategory,
  EXAMPLE_REGISTRY,
  COMPONENT_REGISTRY,
} from '../../shared/component-info';

@Component({
  selector: 'doc-home',
  imports: [RouterLink, CardComponent, BadgeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  protected readonly categories = CATEGORIES;
  protected readonly blockCategories = BLOCK_CATEGORIES;
  protected readonly blocks = BLOCK_REGISTRY;
  protected readonly getComponentsByCategory = getComponentsByCategory;
  protected readonly getBlocksByCategory = getBlocksByCategory;
  protected readonly examples = EXAMPLE_REGISTRY;
  protected readonly componentCount = COMPONENT_REGISTRY.length;

  protected readonly installCopied = signal(false);

  protected copyInstall(): void {
    navigator.clipboard.writeText('npm install garaq-angular-components');
    this.installCopied.set(true);
    setTimeout(() => this.installCopied.set(false), 2000);
  }
}
