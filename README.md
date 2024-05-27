This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

------------------------

Clone project
connect the db

choose the database name
	and the cluster
	
user name
	oleivahn
	8IKYtRvnVzsPLuMq
	
Get the driver
	For Node
	This gives you the connection string... paste that on the .env file
	
This should give you db connection as well as auth right iff the bat

-----
On Initial config..

	Change the name of the app (on the config file - not the .env)
	Mod the routes
	Test the database by sending a form on contact us as is
		Then mod it to yuor liking
		

Mod the db schemas (This is the definition of the "tables")

Go to the form /components/Form/
	And mofidy the form dafault values
	and the formSchema (which is the validation table for Zod)
	
Fix the error wigglis on Form.tsx
	This is mainly matching the required fields on the form
	
Change the model (table) references on the formAction too

Test data send to db


Deploy test to vercel
		Add ENV variables
		
Test vercel deployment
	Grab the live URL and test it 
	https://ehc-paytracker.vercel.app/

Add the domain portion of it
	Get the A record and CName from the domain name provider and add the in the vercel dashboard
	


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) \- learn about Next\.js features and API\.
- [Learn Next.js](https://nextjs.org/learn) \- an interactive Next\.js tutorial\.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) \- your feedback and contributions are welcome\!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# next-template-shadcn
