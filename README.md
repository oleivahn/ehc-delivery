This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

---

# INITIAL SETUP

**CREATE THE REPO**
Clone project from/to github
connect the db

**SETUP THE DB**
**On Mongo Atlas**
Create a new project
Create a cluster

Do not create any tables yet
They get created automatically from the app

user name
oleivahn
8IKYtRvnVzsPLuMq
URI STUFF

**Connect DB to App**
Get the driver connection string on mongodb
For Node (The MONGO_URI)
This gives you the connection string... paste that on the .env file

This should give you db connection as well as auth right iff the bat

---

**WHEN YOU FIRST RUN THE NEXT APP**
On Initial config.. on Nextjs

VsCode
**Mod the Navbar and Routes**
Change the name of the app (on the config file - not the .env)
Mod the routes and Navbar

**Define the data and table for mongo**
Customze the form UI first
Test the database by sending a form on contact us as is
Then mod it to yourr liking later

Mod the db schemas to match the UI (This is the definition of the "tables")

**Form and Validation**
Go to the form /components/Form/
Mofidy the form dafault values
and the formSchema (which is the validation table for Zod)
[UI] Fix the error wigglis on Form.tsx
This is mainly matching the required fields on the form
**Connect the Form Action**
Import the right model (table) references on the formAction too (This is where the data is sent to the db and tables created)

Test data send to db

**Deploy App to vercel**
Connect the app to vercel
Add ENV variables
**Test vercel deployment**
Grab the live URL and test it
https://ehc-paytracker.vercel.app/

**Add the domain portion of it**
Get the A record and CName from the domain name provider and add the in the vercel dashboard

&nbsp;  
&nbsp;
&nbsp;
&nbsp;  
&nbsp;
&nbsp;
**Clerk Roles and Permissions**
All this is is an object that has the roles and permissions (But that it comes from Clerk, only difference)... that's it. Use it to check if a user has the right permissions to access a route or a feature

test@test.com
test
test123!!

Roles: Manager, Admin, User

# Create the Users

Enable Organizations
In Organizations settings:

# Create Permissions

<!-- Template -->
<!-- I choose the names of the key. It's up to me but it has to go feature:permission -->

Name: Add a user
Key: user:create
Descrition: Add a user to the organization

# Add the Roles

<!-- Template -->
<!-- I choose the names of the key. It's up to me but it has to go like: app_administrator (1 word) -->

Name: Admin
Key: app_administrator
Descrition: A user who has access to the most

Basic 3 roles: Admin, Manager, Basic User

[ Add a user, Add day to the schedule, etc... ] **Add the permissions to the role**

**IMPORTANT: Add the permissions you created to the manager Role too, not just the new roles**

# Create an Organization

Go to the organizations tab and create an organization

- Edit it and add users to it (Members)
  - Search for your users and add them to the organization and assign them a role

On Routes you want to protect,

# On VsCode now

Create the SyncActiveOrganization.tsx file
This is the file that will check if the user has the right permissions to access the route

Customize the session token on clerk to add the member's role and permissions

- Clerk
  - Sessions
    - Customize the session token
      - Add the role and permissions to the token

```tsx
{
	"membership": "{{user.organizations}}"
}
```

Config the global types for Clerk
"@types/global.d.ts"

Get the role from the membership and perform the check on the **server page**
**Example Role Based Protected route:** /admin/dashboard

###Alternative
Follow these steps to add the role and permissions to the token
[Role based Auth](https://clerk.com/docs/guides/basic-rbac)

Basically add the role to the meta data and get it later from the session token

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

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
