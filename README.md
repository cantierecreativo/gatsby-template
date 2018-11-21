# gatsby-template
usage: 

```
gatsby new NOME-PROGETTO https://github.com/cantierecreativo/gatsby-template.git

```


Add an `.env` file containing the read-only API token of your DatoCMS site, or rename `.env.sample` to quickstart

```
echo 'DATO_API_TOKEN=abc123' >> .env
```

Then, to run this website in development mode (with live-reload):

```
yarn dev
```

To build the final, production ready static website:

```
yarn build
```

The final result will be saved in the `public` directory.

## About
This project is configured to fetch data from a specific administrative area using [the API DatoCMS provides](https://docs.datocms.com/api/reference.html).

You can find further information about how to integrate DatoCMS with Gatsby in [our documentation](https://docs.datocms.com/gatsby/overview.html).

The goal of this project is to to provide a quick starter template with this features  

* connect and get data from [DatoCMS](https://www.datocms.com)
* internazionalization ready (it, en)
* bemo + bemo webfonts
* google analitycs
* empty layout components 
* seo friendly 
* commented samples for query, pages and templates to speed up development


This websites uses:

* [Yarn](https://yarnpkg.com/) as package manager;
* [Bemo](https://github.com/cantierecreativo/bemo) as sass base
* [Bemo Webfonts](https://github.com/cantierecreativo/bemo-webfonts) as icon font
* [GatsbyJS](https://github.com/gatsbyjs/gatsby) as website generator;
* [gatsby-source-datocms](https://github.com/datocms/gatsby-source-datocms) to integrate the website with DatoCMS.


## SAMPLES

This repo contains a working sample integrated with content coming from this [DatoCMS administrative area](https://dashboard.datocms.com/account/sites/template?name=Portfolio&siteId=604).

to enable calls and queries rename files with prefix and suffix `sample`
some sample are related to multi-language content. that contents are not in the DatoCMS database their purpose is example only
