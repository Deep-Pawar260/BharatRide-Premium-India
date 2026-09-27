# BharatRide Premium India — Large Frontend Demo

A React + Vite frontend-only mobility app redesigned around a premium Indian startup experience.

## Run
```bash
npm install
npm run dev
```
Open the Vite URL, usually `http://localhost:5173/`.

## Major features
- Premium India-focused landing, login and signup screens
- Local SVG signup/brand artwork
- Working address typing with Indian geocoding suggestions (OpenStreetMap/Nominatim)
- Interactive OpenStreetMap map with pickup/destination markers and route line
- Route distance and ETA from OSRM when available, with local fallback
- Pickup current-location control
- Swap pickup/destination
- Now / Schedule booking
- Prime, Auto, Bike and XL vehicle choices
- Dynamic fare calculation, promo code `BHARAT50`, UPI/Cash/Card/Wallet choices
- Driver profile after booking: name, rating, trips, car and registration
- Live-style ride tracking page with progress, share, call, SOS and rating demo
- Ride history, wallet, offers, safety center, profile and support/FAQ pages
- Responsive desktop/tablet/mobile UI

## Important
This is a frontend demonstration. Payments, OTP, driver calls, SOS dispatch, authentication backend and real driver matching are simulated. The map uses public web services and needs internet access for live tiles/geocoding/routing.

## India Design Refresh
- Replaced the old BharatRide mark with a custom Ashoka Chakra + tricolour logo.
- Added Indian-inspired navy, saffron, white and green visual theme.
- Added subtle mandala/circular background patterns and tricolour accents.
- Updated sidebar, top bar, cards, buttons, booking area, wallet, safety and landing/auth pages.
- No backend was added; the project remains React + JavaScript + CSS + Vite.
