import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  isMobileMenuOpen = signal(false);

  services = [
    {
      title: 'Historic Restoration',
      description: 'Preserving the integrity and beauty of historic structures with specialized masonry techniques and materials.',
      icon: 'account_balance'
    },
    {
      title: 'Residential Masonry',
      description: 'Custom brick, stone, and block work for homes, including patios, walkways, retaining walls, and facades.',
      icon: 'home'
    },
    {
      title: 'Commercial Masonry',
      description: 'Large-scale masonry construction for commercial buildings, ensuring durability and structural excellence.',
      icon: 'business'
    },
    {
      title: 'Remodeling',
      description: 'Transforming existing spaces with expert masonry remodeling, adding value and character to your property.',
      icon: 'architecture'
    },
    {
      title: 'Chimney Repair',
      description: 'Comprehensive chimney services including rebuilding, repointing, crown repair, and flashing replacement.',
      icon: 'fireplace'
    },
    {
      title: 'Custom Stonework',
      description: 'Unique and beautiful custom stonework for both interior and exterior applications.',
      icon: 'landscape'
    }
  ];

  galleryImages = [
    'https://picsum.photos/seed/masonry1/600/600',
    'https://picsum.photos/seed/masonry2/600/600',
    'https://picsum.photos/seed/masonry3/600/600',
    'https://picsum.photos/seed/masonry4/600/600',
    'https://picsum.photos/seed/masonry5/600/600',
    'https://picsum.photos/seed/masonry6/600/600'
  ];

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }

  submitForm(event: Event) {
    event.preventDefault();
    // In a real app, this would send the form data to a backend
    console.log('Form submitted');
    alert('Thank you for your message. We will get back to you soon!');
  }
}
