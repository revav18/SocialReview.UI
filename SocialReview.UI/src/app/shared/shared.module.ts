import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';
import { ContentComponent } from './layout/content/content.component';
import { HeaderComponent } from './layout/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AlertModule } from '../alert';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    AlertModule,
    AppRoutingModule,
  ],
  declarations: [
    ContentComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    ContentComponent,
    FooterComponent
  ]
})
export class SharedModule {}
