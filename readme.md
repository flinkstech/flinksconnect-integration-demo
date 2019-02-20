# Flinks Connect Integration Demo

This project is a simple example of an integration of Flinks Connect in a generic on boarding page.

This integration uses a sandbox instance of Flinks Connect, which *you only be able to successfully authenticate accounts our dummy institution Flinks Capital*.

All available accounts for this institution you can find [**here**](https://sandbox.flinks.io/Readme/#flinks-capital-dummy-institution).

## Running the demo

You can simply clone this repository to your computer:

```git
git clone https://github.com/flinkstech/flinksconnect-integration-demo
```

###### Cloning the repo

![Cloning the Repository](https://github.com/flinkstech/flinksconnect-integration-demo/blob/master/imgs/doc/cloning-repo.gif)

From the root directory you can directly open the `index.html` file in your browser to run the demo.

Once open in a browser, it's possible to play with the demo and to experience the look and feel for a page with Flinks Connect.

![Flinks Connect Integration Demo](https://github.com/flinkstech/flinksconnect-integration-demo/blob/master/imgs/doc/flinksconnect-demo.gif)

All features and options for Flinks Connect are directly entered as a URI parameter in the iframe URL.

For this project, this is the iframe URL used:

```html
<iframe class="iframe-offset"
   src="https://toolbox-iframe.private.fin.ag/?
   theme=light&accountSelectorEnable=true&customerName=FinTech&redirectUrl=
   https://flinks.io/contact/thank-you&consentEnable=true&innerRedirect=true&
   backgroundColor=f7f7f7&foregroundColor1=000&desktopLayout=true&headerEnable=false&
   institutionFilterEnable=true&demo=true" height="760" scrolling="no">
</iframe>
```
All parameters and options are described in [**Flinks API documentation**](https://sandbox.flinks.io/Readme/#flinks-connect).
## Event Listener
To activate the event listener into your page, you need to add the following script into your page:

```html
<script>
   window.addEventListener('message', function(e) {
   console.log(e.data)
   });
</script>
```

## Get Support!
All technical questions you have can be found at [**Flinks Help Portal**](https://help.flinks.io).

## License
[MIT](https://choosealicense.com/licenses/mit/)
