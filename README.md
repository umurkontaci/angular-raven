angular-raven
=============

Raven Wrapper for AngularJS

This is a very simple wrapper for Sentry Client Raven.

Set Up
======

1. Set up sentry so that it accepts connections from your domain.

2. Import necessary scripts

    <!--Vendor Scripts-->
    <script type="text/javascript" src="../vendor/angular.min.js"></script>
    <script type="text/javascript" src="../vendor/raven.min.js"></script>
    <!--Raven Script-->
    <script type="text/javascript" src="../angular-raven.js"></script>
    


3. Configure your Raven Url.

    angular.module("yourModule", ["angular-raven"])
    }).value("RavenConfig", {
            ravenUrl: "http://yourravenhash@yourdomain.com/1" // this should be your raven endpoint URL
    });
    

4. Deploy to your server, and play with it.

5. See testclient/index.html for a working one.
