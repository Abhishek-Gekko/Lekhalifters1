# Lekha Lifters Pro

Project

Build a modern industrial equipment website for Lekha Lifters using React Create React App (CRA).

IMPORTANT REQUIREMENTS

Use React Create React App
DO NOT use TypeScript
DO NOT use TSX
Use only JSX
Use functional components
Use React Router DOM
Use CSS Modules or normal CSS (no Tailwind)
Frontend only
Backend APIs will be integrated later
All data should currently come from dummy JSON objects
Keep components reusable and well organized.

Project Structure

src/
 components/
 pages/
 assets/
 css/
 data/
 App.js
 index.js
Theme

The website should have the same premium industrial feeling as the reference images.

Inspired by:

Caterpillar
Mantrac
Liebherr
Heavy Machinery

But DO NOT copy their layout.

Create a fresh, unique and modern design.

The design should look like a premium heavy equipment company.

Color Palette

Primary Black

#111111

Industrial Yellow

#FFC107

Dark Grey

#2B2B2B

Light Grey

#F5F5F5

White

#FFFFFF

Accent

#FFD54F
Typography

Large bold headings

Minimalistic fonts

Professional spacing

Lots of white space

Rounded buttons

Soft shadows

Modern cards

Glass effect where appropriate

Smooth hover animations

Navbar

Sticky Navbar

Contains

Logo

Lekha Lifters

Menu

Home
Products
About
Reviews
Contact

Right side

Large yellow button

Get Quote

On mobile

Hamburger Menu

Home Page
Hero Section

Use a full width hero.

Background:

Large crane image with dark overlay.

Left Side

Large Heading

Heavy Lifting Solutions
For Every Industry

Subtitle

Providing reliable crane sales, rentals and lifting solutions across India with trusted equipment and experienced support.

Buttons

Primary

Explore Cranes

Secondary

Get Quote

Right Side

Floating industrial stats card

500+

Projects Completed

200+

Machines

15+

Years Experience

24/7

Support

Smooth animations.

Featured Categories

Instead of simple cards create

Large horizontal industrial cards.

Examples

Crawler Cranes

Truck Cranes

Rough Terrain

All Terrain

Boom Lifts

Each card contains

Image

Short description

Arrow animation

Hover lift effect

Why Choose Lekha Lifters

Create 6 feature cards

Icons

Genuine Equipment
Competitive Pricing
Fast Delivery
Pan India Service
Certified Machines
Expert Support
Featured Cranes

Display

4 premium crane cards

Each contains

Large Image

Crane Name

Capacity

Brand

Price

Availability Badge

Button

View Details
Customer Testimonials

Carousel

3 reviews visible

Rating stars

Customer photo

Company

Review

CTA Banner

Dark industrial background

Large heading

Looking For The Right Crane?

Yellow Button

Request A Quote
Products Page

I DO NOT want a normal product grid.

Create a unique premium product page.

Layout

Left Side

Sticky Filter Panel

Contains

Search

Brand Filter

Capacity Filter

Availability Filter

Price Range

Equipment Type

Right Side

Product Results

Instead of basic cards use

Large horizontal premium equipment cards.

Each card contains

Large Image

Crane Name

Brand

Model

Capacity

Specifications

Price

Availability Badge

Buttons

View Details

Request Quotation

Hover animations.

Search should instantly filter products without reloading.

Product Details Modal

When clicking

View Details

Open a modern fullscreen modal.

Show

Image Gallery

Specifications

Description

Features

Applications

Price

Availability

Button

Request Quotation
Request Quotation

THIS IS VERY IMPORTANT.

When user clicks

Request Quotation

Open a beautiful modal.

Automatically fill

Product Name

Brand

Model

Do NOT ask user to type them.

User only enters

Customer Name

Phone

Email

Company Name

Quantity

Additional Requirements

Submit button

After submit

Show success popup

Thank you.

Your quotation request has been submitted successfully.

Our team will contact you shortly.

Since this is frontend only

Store submissions temporarily in local state.

About Page

Premium layout

Hero banner

Company Story

Mission

Vision

Timeline

Experience

Statistics

Services

Why Choose Us

Professional images

Alternating sections

Animations while scrolling.

Reviews Page

Modern review cards

Display

Customer Name

Star Rating

Review

Optional Image

Review Date

Large average rating at top

Filter

5 Star

4 Star

3 Star

Frontend only.

Reviews come from dummy JSON.

Contact Page

Hero Banner

Two column layout

Left

Contact Form

Fields

Name

Email

Phone

Message

Button

Send Message

Right

Company Information

Address

Phone

Email

Business Hours

Google Maps placeholder section

Include a clearly marked container where Google Maps iframe can be added later.

Floating Buttons

Visible on every page.

Floating WhatsApp Button

Floating Call Button

Floating Scroll To Top

Floating Social Panel

Instagram

Facebook

LinkedIn

Hover animations.

Footer

Dark industrial footer.

Sections

Company

Products

Quick Links

Contact

Social Icons

Copyright

Admin Login

Route

/admin

When user opens

/admin

Show login page.

Fields

Email

Password

Login Button

IMPORTANT

Do NOT include

Register

Signup

Create Account

Forgot Password

Create Admin

Only login.

Use dummy credentials.

Example

Email

admin@lekhalifters.com

Password

admin123

After successful login

Navigate to

/admin/dashboard
Admin Dashboard

Modern dashboard

Sidebar

Dashboard

Products

Quotation Requests

Customer Reviews

Logout

Cards

Total Products

Pending Quotations

Approved Reviews

Recent Activity

Tables

Products

Quotation Requests

Customer Reviews

Buttons

Add Product

Edit

Delete

Approve Review

Reject Review

Everything should currently work using dummy local state.

Animations

Use

Fade

Slide

Zoom

Hover Scale

Smooth transitions

Professional page transitions

No excessive animations.

Responsive

Perfect responsiveness for

Desktop

Laptop

Tablet

Mobile

Dummy Data

Generate 12 crane products with realistic data.

Include

Images (placeholder URLs)

Brand

Model

Capacity

Specifications

Price

Availability

Descriptions

Generate

8 customer reviews

Generate

6 quotation requests for admin dashboard.

Coding Standards
Use only JSX
Use React Create React App
No TypeScript
No TSX
No Redux
No backend
No authentication library
No Firebase
No Express
No MongoDB
No API integration
Use reusable components
Keep code clean and modular
Add comments where necessary
Use React Router DOM for navigation
Make every page production-ready with premium UI and smooth UX

Overall goal: Create a premium, modern industrial website for Lekha Lifters that feels as polished as Caterpillar or Mantrac, but with a unique layout and user experience. The product enquiry flow should be seamless by automatically carrying the selected crane's information into the quotation form, and the admin area should be accessible only via /admin with a login screen that has no registration or admin creation options.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4929bf31-10b9-4aa6-b26f-4c7917893055).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
