---
title: "How I organise my music"
description: "As a music-lover, I am always working on improving the perfect setup that combines ease of access with the purest sound quality."
date: "Mar 22 2024"
---
As a music-lover, I am always working on improving the perfect setup that combines ease of access with the purest sound quality. That's exactly why I embarked on a journey to build my own music streaming system. I chose Plexamp, a dedicated music player for Plex, running on a Raspberry Pi 4, with DietPi as the operating system for its efficiency and an external SSD for ample, fast storage. Here's how I did it:

### The Hardware Lineup
- **Raspberry Pi 4**: The cornerstone of our system, the Pi is a compact powerhouse, ideal for running our media server without drawing too much power.
- **External SSD**: For quick, reliable access to high-quality lossless music files, an SSD is a must-have.
- **Power Supply**: Don't skimp on this; a stable power supply keeps everything running smoothly.
- **Cooling Case**: Keep your Pi chill even when the music heats up with a case designed for cooling.

### The DietPi Difference
DietPi is a lightweight, optimized OS that's perfect for getting the most out of a Raspberry Pi. Here's how to get it set up:

1. **Download DietPi**: Head over to the [DietPi website](https://dietpi.com) and download the latest image.
2. **Flash It On A SD Card**: Use Balena Etcher or a similar tool to write DietPi to your microSD card.
3. **Initial Configuration**: Once you've connected your Pi to its peripherals and booted up, follow the on-screen instructions to get DietPi up and running.

### SSD Setup
Before you plug in your SSD to the Pi:

- **Format**: Prepare your SSD with a file system like exFAT or EXT4.
- **Mount**: After booting DietPi, connect the SSD and configure it to auto-mount on startup.

### Plexamp Installation
With your server's heart beating, it's time to get Plexamp pumping:

1. **Plex Media Server**: Install this first from Plex's website following their [Linux guide](https://support.plex.tv/articles/200264746-plex-media-server-linux/).
2. **Server Setup**: Fire up Plex in your browser, sign in, and point it to your SSD-stored music collection.
3. **Plexamp Time**: Download Plexamp for Linux and install it on your Pi.

And there you have it. I have been running this setup for a couple of weeks and it works fluently. I also setup SAMBA to easily add new music.
