# CDN
###### it works with [jsDelivr](https://github.com/jsdelivr/jsdelivr)

### What is a CDN?
A content delivery network (CDN) refers to a geographically distributed group of servers which work together to provide fast delivery of Internet content.

A CDN allows for the quick transfer of assets needed for loading Internet content including HTML pages, javascript files, stylesheets, images, and videos. The popularity of CDN services continues to grow, and today the majority of web traffic is served through CDNs, including traffic from major sites like Facebook, Netflix, and Amazon.

### cdn in Co dev

#### GitHub

For example, you can convert Github links to CDN links 

```
cdn https://github.com/nemanjam/mern-boilerplate/blob/63d75adec20ba06269ed06eb928d8aeff9eaceff/client/src/components/Footer/Footer.js
```

Or even just the location of the file 

```
cdn gh/user/repo/version/file

cdn gh/jquery/jquery/3.2.1/dist/jquery.min.js
```

#### NPM

```
cdn npm/package/version/file

cdn npm/jquery/3.2.1/dist/jquery.min.js
```

#### WordPress
```
cdn wp/plugins/project/tags/version/file

cdn wp/plugins/wp-slimstat/tags/4.6.5/wp-slimstat.js
```