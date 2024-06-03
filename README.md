# Stream Deck Control for CRG

## Status

[![Super-Linter](https://github.com/rcrderby/crg-streamdeck/actions/workflows/lint-files.yml/badge.svg)](https://github.com/marketplace/actions/super-linter)

## Overview

This repository includes resources that allow you to control the [CRG ScoreBoard](https://github.com/rollerderby/scoreboard "CRG ScoreBoard Git Repository") application for roller derby with an [Elgato Stream Deck](https://www.elgato.com/us/en/s/welcome-to-stream-deck "Elgato Stream Deck").

Every roller derby SBO [^1] has a preferred way to interact with the CRG Scoreboard application.  Some SBOs use a mouse exclusively, some use a mouse with a standard keyboard and small handful of key mappings, some use highly-customized keyboard controllers, and some even use gaming console controllers.

Stream Desk is another way to operate a roller derby scoreboard that we've found helps new SBOs overcome concern with the CRG Scoreboard Operator Console \[[example](/docs/images/crg/crg-operator-console-example.png "CRG Scoreboard Operator Console Example Image")\] by presenting a simpler, colorized version of the most common SBO functions in a self-contained unit \[[example](/docs/images/stream-deck/32-button-profiles/stream-deck-32-black-vs-white-page-1.png "Stream Deck Example Image")\].

## Stream Deck Software

One thing to note about Stream Deck is it requires a [software installation](https://www.elgato.com/us/en/s/downloads "Stream Deck Software Downloads") in order to function, unlike most keyboards.  So, be sure you can install Stream Deck software on whichever SBO computer you intend to use.

## Stream Deck Support

Stream Deck controllers are devices with a number of customizable LED keys/buttons that connect to a Windows or macOS computer via USB.  Among other things, you may assign Stream Deck keys to send specific keystrokes to a computer and you can align those keystrokes with CRG Operator key mappings to control CRG with a Stream Deck.

Any Stream Deck platform should be able to control CRG, and this repository contains content for the following Stream Deck controllers:

|            **Platform**           | **Supported** | **Number of Keys** | **Number of Dials** |
|---------------------------------- |:-------------:|:------------------:|:-------------------:|
| Stream Deck XL [^2]               |       X       |         32         |         N/A         |
| Stream Deck MK.2 [^3]             |               |         15         |         N/A         |
| Stream Deck + [^4]                |               |          8         |          4          |
| Stream Deck Mini [^5]             |               |          6         |         N/A         |
| Stream Deck Neo [^6]              |               |          8         |         N/A         |
| Stream Deck Pedal [^7]            |               |         N/A        |         N/A         |
| Stream Deck Mobile (iOS) [^8]     |               |         N/A        |         N/A         |
| Stream Deck Mobile (Android) [^9] |               |         N/A        |         N/A         |

<sub>Generated with [Tables Generator](https://www.tablesgenerator.com/markdown_tables "Tables Generator")</sub>

## Getting Started

The content in this repository will help you get a Stream Deck connected to and controlling CRG within a few minutes, assuming you have a computer that effectively runs the CRG Scoreboard software already.  Follow these steps to complete the setup process:

<details>
  <summary>
    Download and install the Stream Deck software on your SBO computer:
  </summary>

  The Stream Deck software allows your computer to recognize and interact with a [Stream Deck controller](#stream-deck-support "Stream Deck Controller Platforms").  You must install the Stream Deck software before for your Stream Deck controller to function.

  1. Open a web browser on your SBO computer and navigate to [Elgato Software Downloads](https://www.elgato.com/us/en/s/downloads "Elgato Software Downloads").

  2. Locate and download the `Stream Deck` software for macOS or Windows to your SBO computer.

  3. Install the Stream Deck software on your SBO computer.

</details>

<details>
  <summary>
    Download and Import the Stream Deck Profiles:
  </summary>

  Once you have the Stream Deck software installed on your SBO computer, you can download and install the Stream Deck Profiles for CRG in this repository.  These Stream Deck Profiles contain the key icons and key mapping configurations necessary to work with the CRG Operator Profile, and its keyboard mappings, that you will import in the next step.
  
  1. Use your web browser to navigate to the [`streamdeck-profiles` directory](/streamdeck-profiles "Stream Deck Profiles directory") of this repository where you will find the available Stream Deck Profiles for CRG.
  2. Download the appropriate Stream Deck Profiles to your SBO computer, and note there are different Profiles for macOS and Windows because the Stream Deck Software key mappings do not work across platforms.

  3. Open the Stream Deck Software configuration window and click the gear icon in the top menu to access the Stream Deck `Preferences` window \[[example](/docs/images/stream-deck/preferences/streamdeck-preferences.png "Stream Deck Preferences Window")\].

  4. Click on the `Profiles` tab, click to expand the action menu, and click `Import...` \[[example](/docs/images/stream-deck/preferences/streamdeck-import-profile.png "Stream Deck Import Profile")\].

  5. Select and import the applicable Stream Deck Profiles that you downloaded to your SBO computer.

  6. Close the `Preferences` Windows and review the profiles you imported:

- [Black vs. White page 1 example](/docs/images/stream-deck/32-button-profiles/stream-deck-32-black-vs-white-page-1.png "Black vs. White page 1 example")

- [Black vs. White page 2 example](/docs/images/stream-deck/32-button-profiles/stream-deck-32-black-vs-white-page-2.png "Black vs. White page 2 example")

- [White vs. Black page 1 example](/docs/images/stream-deck/32-button-profiles/stream-deck-32-white-vs-black-page-1.png "White vs. Black page 1 example")

- [White vs. Black page 2 example](/docs/images/stream-deck/32-button-profiles/stream-deck-32-white-vs-black-page-2.png "White vs. Black page 2 example")

</details>

<details>
  <summary>
    Download and Import the CRG Operator Profile:
  </summary>

  The CRG Operator profile in this repository contains the configuration that maps CRG Operator Panel functions to keyboard keys for interaction with a Stream Deck.

  1. Use the web browser on your SBO computer to navigate to the [`crg-operator-profiles` directory](/crg-operator-profiles "CRG Operator Profiles directory").

  2. Download the profile file named [`crg-operator-streamdeck.json`](/crg-operator-profiles/crg-operator-streamdeck.json) to the SBO computer.

  3. Log on to your SBO CRG instance and click on the `Games / Teams / Rulesets` link \[[example](/docs/images/crg/crg-operator-console-main-page.png)\].

  4. Click on the `Choose File` button, select the `crg-operator-streamdeck.json` file, and click the `Import JSON` button \[[example](/docs/images/crg/crg-operator-console-main-page.png)\].

</details>

4. Control CRG With Stream Deck

<details>
  <summary>
    TODO
  </summary>

</details>

## Resources

- [Stream Deck key icons images](/streamdeck-icons "Stream Deck key icons images").

## Contributing

Please consider sharing any Stream Deck content for CRG you create to this repository!  Some examples of things you can share include:

- Stream Deck key icons in various team colors.
- Stream Deck key layouts, within a Profile, for different models of controllers.
- CRG operator profiles intended to work with Stream Deck key layouts for different models of controllers.

[^1]: Scoreboard Operator
[^2]: [Stream Deck XL](https://www.elgato.com/us/en/p/stream-deck-xl "Stream Deck XL")
[^3]: [Stream Deck MK.2](https://www.elgato.com/us/en/p/stream-deck-mk2-black "Stream Deck MK.2")
[^4]: [Stream Deck +](https://www.elgato.com/us/en/p/stream-deck-plus-black "Stream Deck +")
[^5]: [Stream Deck Mini](https://www.elgato.com/us/en/p/stream-deck-mini "Stream Deck Mini")
[^6]: [Stream Deck Neo](https://www.elgato.com/us/en/p/stream-deck-neo "Stream Deck Neo")
[^7]: [Stream Deck Pedal](https://www.elgato.com/us/en/p/stream-deck-pedal "Stream Deck Pedal")
[^8]: [Stream Deck Mobile (iOS)](https://www.elgato.com/us/en/s/stream-deck-mobile "Stream Deck Mobile (iOS)")
[^9]: [Stream Deck Mobile (Android)](https://www.elgato.com/us/en/s/stream-deck-mobile-android "Stream Deck Mobile (Android")
