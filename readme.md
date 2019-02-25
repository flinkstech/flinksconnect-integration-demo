# Flinks Connect Integration Demo

This project is a simple example of an integration of Flinks Connect in a generic on boarding page.

This integration uses a sandbox instance of Flinks Connect, which *you only be able to successfully authenticate using accounts from our dummy institution Flinks Capital*.

All available accounts for this test institution are listed [**here**](https://sandbox.flinks.io/Readme/#flinks-capital-dummy-institution).



## Running the integration demo

###### Downloading the zip file
You can download the Flinks Connect Integration demo files [clicking here](https://github.com/flinkstech/flinksconnect-integration-demo/archive/master.zip)

Or you can clone this repository:

```git
git clone https://github.com/flinkstech/flinksconnect-integration-demo
```

###### Cloning or downloading the repository

![Cloning the Repository](https://github.com/flinkstech/flinksconnect-integration-demo/blob/master/imgs/doc/cloning-repo.gif)

From the root directory from the cloned repository, you can directly open the `index.html` file in your browser to run the demo.

Once open in a browser, it's possible to play with the demo and to experience the look and feel for a page with Flinks Connect.

![Flinks Connect Integration Demo](https://github.com/flinkstech/flinksconnect-integration-demo/blob/master/imgs/doc/flinksconnect-demo.gif)



## Installation

To embed Flinks Connect into a page, you simply need to add your Flinks Connect private instance's URL into an iframe. For this project, we used the sandbox instance (named toolbox) with a few recommended parameters:

```html
<iframe class="iframe-offset"
   src="https://toolbox-iframe.private.fin.ag/?demo=true&redirectUrl=https://flinks.io/contact/thank-you&innerRedirect=true&theme=light&consentEnable=true&customerName=FinTech&backgroundColor=f7f7f7&foregroundColor1=000000&desktopLayout=true&headerEnable=false&institutionFilterEnable=true" height="760" scrolling="no">
</iframe>
```



## Configuration

All customizable options for design and functionalities are controlled by the parameters that are entered directly as URI parameters into the iframe URL.

All available parameters and options are described in [**Flinks Documentation**](https://sandbox.flinks.io/Readme/#flinks-connect).

In this example the following parameters were used:

| Parameter               | Value                               | Description                                                  |
| :---------------------- | :---------------------------------- | :----------------------------------------------------------- |
| demo                    | true                                | Enables the Dummy Institution Flinks Capital into the Institution Selection menu |
| redirectUrl (mandatory) | https://flinks.io/contact/thank-you | Defines the landing page URL for Flinks Connect redirection  |
| innerRedirect           | true                                | Sets Flinks Connect to redirect only the content within the iframe |
| theme                   | light                               | Enables the Light theme                                      |
| consentEnable           | true                                | Enables the Consent Page                                     |
| customerName            | FinTech                             | Sets the brand's name for the Consent Page                   |
| backgroundColor         | f7f7f7                              | Sets the background color hex value                          |
| foregroundColor1        | 000000                              | Sets the foreground #1 color hex value                       |
| desktopLayout           | true                                | Enables the browser responsive design for the Institution Selection Menu |
| headerEnable            | false                               | Removes header text and image from the Institution Selection Menu |
| institutionFilterEnable | true                                | Enables the Light theme                                      |



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



## Redirection and LoginId

Once an account is successfully authenticated with the Financial Institution, Flinks Connect will redirect the end-user to the landing page which was defined in the RedirectUrl parameter. Along with the redirection, you will receive the `LoginId` that's the reference from the recently connected account. _This the required information for you to receive the Financial data later._

You have two ways of retrieving the LoginId:



1. ##### Directly from the redirected URL

Flinks Connect adds the `loginId` along with the `institution` into the landing page url.
Example: 

```
https://flinks.io/contact/thank-you?loginId=4c1bb6…-45aa-49b6-08d69afaf016&institution=FlinksCapital
```

2. ##### From the Event Listener

From the Redirect step Object:
EXAMPLE: 
```json
{step: "REDIRECT", institution: "FlinksCapital", url: "https://flinks.io/contact/thank-you?loginId=4c1bb6…-45aa-49b6-08d69afaf016&institution=FlinksCapital"}
```



## Retrieving the data

There are many ways for you to access the data from the connected accounts. [Here is one example](https://help.flinks.io/hc/en-us/articles/115004314374-Retrieving-Financial-Data-from-Flinks-Connect). Please refer to our support team to get more orientation on which is the best flow for you.



## Get Support!

All technical questions you have can be found at [**Flinks Help Portal**](https://help.flinks.io).



## License

[MIT](https://choosealicense.com/licenses/mit/)