---
title: "Understanding Salesforce Data Cloud: Identity Resolution Simplified"
description: "Salesforce's Data Cloud isn't about creating a perfect, singular view of each customer. Instead, it's about creating a comprehensive, flexible view that can adapt to different contexts and use cases."
date: “Oct 18 2024"
---



## Unified Profile vs Golden Record

First, forget what you know about golden records. While they aimed for a single, perfect customer view, Salesforce's Unified Profile takes a different approach. Instead of forcing all customer data into one "best" record, it embraces the complexity of real-world identities.

Unified Profile ≠ Golden Record

Think about it: you probably have multiple email addresses, phone numbers, and maybe even physical addresses. A golden record would try to pick just one of each. But the Unified Profile keeps all this information, recognizing that each piece might be valuable in different contexts.

## The Identity Resolution Trio

To make sense of all this data, Salesforce uses three key components: the Data Cloud Party subject area, the Party Identification object, and the Party field. Together, these form a flexible system that can handle the messiness of real customer data.

The Data Cloud Party represents the core entity - whether that's an individual or an organization. The Party Identification object links various identifiers to this entity. And the Party field provides a unified reference point across different Salesforce objects.

In practice, this approach preserves the richness of your customer data. Let's say a customer uses one email for work communications and another for personal purchases. With a traditional golden record, you'd have to choose one and lose valuable context. The Unified Profile keeps both, allowing for more nuanced and effective customer interactions.


To take advantage of this system, start by migrating your data to Data Cloud. Then, map your existing fields to the Party structure. Use the Party Identification object to link various customer identifiers. This might take some initial setup, but the payoff in data flexibility and completeness is worth it.

## In Summary

Salesforce's Data Cloud isn't about creating a perfect, singular view of each customer. Instead, it's about creating a comprehensive, flexible view that can adapt to different contexts and use cases. It's closer to how we actually think about people in real life - complex individuals with multiple facets to their identity.

By embracing this complexity rather than fighting against it, you'll end up with a more accurate and useful customer database. This translates directly into more effective marketing, better customer service, and ultimately, stronger business relationships.

