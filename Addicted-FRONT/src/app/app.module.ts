import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { SearchFormComponent } from './user/search-form/search-form.component';
import { NavBarComponent } from './user/nav-bar/nav-bar.component';
import { MenuCategoryComponent } from './user/menu-category/menu-category.component';
import { ProductsListComponent } from './user/products-list/products-list.component';
import { DownloadDemoComponent } from './user/download-demo/download-demo.component';
import { FooterComponent } from './user/footer/footer.component';
import { WidgetsHeaderComponent } from './user/widgets-header/widgets-header.component';
import { CarouselSliderComponent } from './user/carousel-slider/carousel-slider.component';
import { PopularCategoryComponent } from './user/popular-category/popular-category.component';
import { HomeCategoryComponent } from './user/home-category/home-category.component';
import { HomeCategoryBannerComponent } from './user/home-category-banner/home-category-banner.component';
import { HomeCategoryListComponent } from './user/home-category-list/home-category-list.component';
import { RequestQuotationComponent } from './user/request-quotation/request-quotation.component';
import { BannerQuoteComponent } from './user/banner-quote/banner-quote.component';
import { QuoteFormComponent } from './user/quote-form/quote-form.component';
import { RecommendedItemsComponent } from './user/recommended-items/recommended-items.component';
import { TradeServicesComponent } from './user/trade-services/trade-services.component';
import { RegionsListComponent } from './user/regions-list/regions-list.component';
import { LargeBannerComponent } from './user/large-banner/large-banner.component';
import { SubscribeFormComponent } from './user/subscribe-form/subscribe-form.component';
import { ChallengesComponent } from './user/challenges/challenges.component';
import { AppRoutingModule } from './user/routes/app-routes.module';
import { OldpageComponent } from './user/oldpage/oldpage.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './user/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    NavBarComponent,
    MenuCategoryComponent,
    ProductsListComponent,
    DownloadDemoComponent,
    FooterComponent,
    WidgetsHeaderComponent,
    CarouselSliderComponent,
    PopularCategoryComponent,
    HomeCategoryComponent,
    HomeCategoryBannerComponent,
    HomeCategoryListComponent,
    RequestQuotationComponent,
    BannerQuoteComponent,
    QuoteFormComponent,
    RecommendedItemsComponent,
    TradeServicesComponent,
    RegionsListComponent,
    LargeBannerComponent,
    SubscribeFormComponent,
    ChallengesComponent,
    OldpageComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
