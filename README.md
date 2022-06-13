# Specs media 

## Technologies
- Next.js - SSR Framework for react
- React.js - UI Frame work
- Tailwind - CSS Framework
- Prisma - ORM to connect to AWS MySQL server
- AWS MySQL instance
- IMDB api to get movie data, NOTE: My daily requests has expired for 2022-06-13

### Install

Run the following command to install all packages needed
```
run npm i && npx prisma generate
```

Run the following command for the build version of the site
```
npm run build
```

Run the following command to view site
```
npm run dev
```

### What I could improve
- Code structure
- Documentation

### Blockers
I ran into a blocker when I deployed the site to a Amplify instance where Prisma needs Lambda permissions

See site: https://main.d5aqwu4z5tecm.amplifyapp.com/login