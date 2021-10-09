"use strict";(self.webpackChunkorca_docs=self.webpackChunkorca_docs||[]).push([[764],{484:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],p={sidebar_position:1,id:"production-mode"},l="Production Mode",d={unversionedId:"deployment/production-mode",id:"deployment/production-mode",isDocsHomePage:!1,title:"Production Mode",description:"Building for production environment",source:"@site/docs/deployment/production-mode.md",sourceDirName:"deployment",slug:"/deployment/production-mode",permalink:"/docs/deployment/production-mode",editUrl:"https://github.com/elevensymbols/getorca.org/edit/main/docs/deployment/production-mode.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"production-mode"},sidebar:"tutorialSidebar",previous:{title:"Project Structure",permalink:"/docs/getting-started/project-structure"},next:{title:"Deployment",permalink:"/docs/deployment/deployment"}},c=[{value:"Building for production environment",id:"building-for-production-environment",children:[{value:"API",id:"api",children:[]},{value:"Frontend",id:"frontend",children:[]}]},{value:"PM2",id:"pm2",children:[{value:"PM2 Commands",id:"pm2-commands",children:[]}]}],m={toc:c};function u(t){var e=t.components,n=(0,r.Z)(t,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"production-mode"},"Production Mode"),(0,a.kt)("h2",{id:"building-for-production-environment"},"Building for production environment"),(0,a.kt)("p",null,"Running the ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn build")," command from the project's root directory creates a production build for API and Frontend packages."),(0,a.kt)("p",null,"API build will be created in the ",(0,a.kt)("inlineCode",{parentName:"p"},"packages/api/build")," directory and the frontend in the ",(0,a.kt)("inlineCode",{parentName:"p"},"packages/frontend/.next"),"."),(0,a.kt)("p",null,"Next, you can run packages separately with the ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn start")," command."),(0,a.kt)("h3",{id:"api"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd packages/api\nyarn start\n")),(0,a.kt)("p",null,"Will run the API on the following URL: ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:4000/"},"http://localhost:4000")),(0,a.kt)("h3",{id:"frontend"},"Frontend"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd packages/frontend\nyarn start\n")),(0,a.kt)("p",null,"Will run the Frontend on the following URL: ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"http://localhost:3000")),(0,a.kt)("h2",{id:"pm2"},"PM2"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://pm2.keymetrics.io/"},"PM2")," is a process manager that helps to keep Node.js applications alive all the time."),(0,a.kt)("p",null,"To use the PM2, we need to install it globally."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yarn global add pm2@latest\n")),(0,a.kt)("p",null,"Since Orca comes with a pm2 configuration file, you can run both packages by running one command from the project's root directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pm2 start pm2.config.json\n")),(0,a.kt)("p",null,"After running the command, API will be available on the following URL: ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:4000/"},"http://localhost:4000")," and the Frontend on the following ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"http://localhost:3000"),"."),(0,a.kt)("h3",{id:"pm2-commands"},"PM2 Commands"),(0,a.kt)("p",null,"PM2 provides many subcommands that allow you to manage or look up information about your applications."),(0,a.kt)("p",null,"List the applications currently managed by PM2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pm2 list\n")),(0,a.kt)("p",null,"Stop an application with this command (specify the PM2 App name or id):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pm2 stop app-name-or-id\n")),(0,a.kt)("p",null,"Restart an application:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pm2 restart app-name-or-id\n")),(0,a.kt)("p",null,"Get information about a specific application using its App name:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pm2 info app-name\n")))}u.isMDXComponent=!0}}]);