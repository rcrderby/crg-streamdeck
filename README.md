# Stream Deck Control for CRG

## Status

[![Super-Linter](https://github.com/rcrderby/crg-streamdeck/actions/workflows/lint-files.yml/badge.svg)](https://github.com/marketplace/actions/super-linter)

## Overview

This repository includes resources that allow you to control the [CRG ScoreBoard](https://github.com/rollerderby/scoreboard "CRG ScoreBoard Git Repository") application for roller derby with an [Elgato Stream Deck](https://www.elgato.com/us/en/s/welcome-to-stream-deck "Elgato Stream Deck").

Every roller derby SBO [^1] has a preferred way to interact with the CRG Scoreboard application.  Some SBOs use a mouse exclusively, some use a mouse with a standard keyboard and small handful of key mappings, some use highly-customized keyboard controllers, and some even use gaming console controllers.

Stream Desk is just one more way to operate a roller derby scoreboard that we've found helps new SBOs overcome intimidation with the standard CRG Scoreboard Operator Panel \[[example](/docs/images/crg/crg-operator-panel.png "CRG Scoreboard Operator Panel Example Image")\] by presenting a simpler, colorized version of the most common SBO functions in a self-contained unit \[[example](/docs/images/stream-deck/32-button-profiles/stream-deck-32-black-vs-white-page-1.png "Stream Deck Example Image")\].

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

The content in this repository should help you get a Stream Deck connected to and controlling CRG within a few minutes, assuming you already have a computer that effectively runs the CRG Scoreboard software.  Follow these steps to control CRG:

1. Download and install the [Stream Deck software](https://www.elgato.com/us/en/s/downloads "Stream Deck Software Downloads") on your SBO computer.

2. Import the Stream Deck Profile.

    <details>
      <summary>
        Download the Stream Deck Profile(s)
      </summary>

      - Stream Deck Profiles contain all of the key icons and keyboard mappings to work with CRG, and you will find all available Stream Deck Profiles [here](/streamdeck-profiles "Stream Deck Profiles Folder").
      - Download the appropriate Stream Deck Profiles to your SBO computer.
      - Note there are different Profiles for macOS and Windows because the Stream Deck key mappings do not work across platforms.

    </details>

    <details>
      <summary>
        Import the Stream Deck Profile(s)
      </summary>

      1. Open the Stream Deck Software configuration window and click the gear icon in the top menu to access the Stream Deck `Preferences` window \[[example](/docs/images/stream-deck/preferences/streamdeck-preferences.png "Stream Deck Preferences Window")\].

      2. Click on the `Profiles` tab, click to expand the action menu, and click `Import...` \[[example](/docs/images/stream-deck/preferences/streamdeck-import-profile.png "Stream Deck Import Profile")\].

      3. Select and import the applicable Stream Deck Profiles that you downloaded to your SBO computer.

      4. Close the `Preferences` Windows and review the profiles you imported.

        - [Black vs. White page 1 example](/docs/images/stream-deck/32-button-profiles/stream-deck-32-black-vs-white-page-1.png "Black vs. White page 1 example")
        - [Black vs. White page 2 example](/docs/images/stream-deck/32-button-profiles/stream-deck-32-black-vs-white-page-2.png "Black vs. White page 2 example")
        - [White vs. Black page 1 example](/docs/images/stream-deck/32-button-profiles/stream-deck-32-white-vs-black-page-1.png "White vs. Black page 1 example")
        - [White vs. Black page 2 example](/docs/images/stream-deck/32-button-profiles/stream-deck-32-white-vs-black-page-2.png "White vs. Black page 2 example")


    </details>

3. Import CRG Operator Profile

    <details>
      <summary>
        TODO
      </summary>

      - TODO

    </details>

4. Control CRG With Stream Deck

    <details>
      <summary>
        TODO
      </summary>

      - TODO

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
