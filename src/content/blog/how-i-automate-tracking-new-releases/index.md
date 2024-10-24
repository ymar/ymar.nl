---
title: "How I Automate Tracking New Releases"
description: "As a music-lover, I am always working on improving the perfect setup that combines ease of access with the purest sound quality."
date: 2024-03-22
---

# How I Automate Tracking New Releases

As a dedicated fan of Anjunadeep's deep, progressive sound, I wanted to make sure I never missed any new releases from the label. Instead of manually checking their catalog every week, I created a simple but effective automation pipeline using [Smarter Playlists](http://smarterplaylists.playlistmachinery.com/go.html) to keep track of their latest releases.

## The Setup

Using Smarter Playlists' visual workflow builder, I created an automated system that keeps my collection fresh and organized. Here's how my automation pipeline works:

1. **Source Feeds**: I pull from three different sources:
   - Anjunadeep's main discography
   - Anjunadeep Explorations series
   - Reflections new releases (their ambient sub-label)

2. **Processing Steps**:
   - First, the system **alternates** between these three sources, combining them into a single stream using the "alternate" combiner
   - Then it runs a **de-duplication** check to remove any potential duplicate tracks
   - Finally, it **sorts everything by reverse album date** to ensure the newest releases always appear first

3. **Output**: The resulting playlist is automatically saved to my Spotify account, giving me a constantly updated collection of the latest Anjunadeep releases.

## Benefits

This automation has several advantages:
- I never miss new releases from any of Anjunadeep's catalogs
- It handles both main releases and their specialized series (Explorations, Reflections)
- The reverse chronological sorting means new music is always at the top
- It's completely hands-off once set up
- De-duplication ensures a clean playlist without repeated tracks

## Technical Notes

The workflow in Smarter Playlists is relatively simple but effective. The alternating combiner ensures fair representation from all three sources, while the de-duplication step prevents any overlap when tracks appear in multiple places (like on singles and albums). The visual programming interface makes it easy to adjust and modify the workflow as needed.

## Future Improvements

Possible enhancements could include:
- Adding notifications for new releases
- Creating separate playlists for different styles (deep house, progressive, ambient)
- Including release radar tracks from Anjunadeep artists
- Implementing additional filters based on BPM or energy levels
- Creating seasonal variations of the playlist

By automating this process with Smarter Playlists, I can focus on enjoying the music rather than spending time manually tracking new releases. It's a perfect example of how a little automation can enhance your music listening experience.

*Have you set up any similar automation for tracking your favorite labels? I'd love to hear about your setup in the comments below!*