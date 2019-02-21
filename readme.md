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

From the root directory from the cloned repository, you can directly open the `index.html` file in your browser to run the demo.

Once open in a browser, it's possible to play with the demo and to experience the look and feel for a page with Flinks Connect.

![Flinks Connect Integration Demo](https://github.com/flinkstech/flinksconnect-integration-demo/blob/master/imgs/doc/flinksconnect-demo.gif)

## Installation

To embed Flinks Connect into a page, you simply need to add your Flinks Connect private instance's URL into an iframe. For this project, we used the sandbox instance (named toolbox):

```html
<iframe class="iframe-offset"
   src="https://toolbox-iframe.private.fin.ag/?theme=light&accountSelectorEnable=true&customerName=FinTech&redirectUrl=https://flinks.io/contact/thank-you&consentEnable=true&innerRedirect=true&backgroundColor=f7f7f7&foregroundColor1=000&desktopLayout=true&headerEnable=false&institutionFilterEnable=true&demo=true" height="760" scrolling="no">
</iframe>
```

## Configuration
All customizable options for design and functionalities are controlled by the parameters that are entered directly as URI parameters into the iframe URL.

All available parameters and options are described in [**Flinks Documentation**](https://sandbox.flinks.io/Readme/#flinks-connect).

## Event Listener
With Flinks Connect it is possible to enable a Javascript Event output which returns different steps taken by the enduser during the Authentication process and errors codes as well.

These events are useful tool for controlling the user experience and for tracing purposes, but it's an optional step.

To activate the event listener into your page, you need to add the following script into your page:

```html
<script>
   window.addEventListener('message', function(e) {
   console.log(e.data)
   });
</script>
```

## Retrieving the data

There are many ways for you to access the data from the connected accounts. [Here is one example](https://help.flinks.io/hc/en-us/articles/115004314374-Retrieving-Financial-Data-from-Flinks-Connect). Please refer to our support team to get more orientation on which is the best flow for you.

## Get Support!
All technical questions you have can be found at [**Flinks Help Portal**](https://help.flinks.io).

## License
[MIT](https://choosealicense.com/licenses/mit/)
