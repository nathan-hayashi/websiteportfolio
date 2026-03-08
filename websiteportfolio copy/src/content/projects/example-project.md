---
# =============================================================================
# PROJECT TEMPLATE
# =============================================================================
# This is an example project case study. Duplicate this file for each project.
# The filename becomes the URL slug: /projects/example-project
#
# REQUIRED FIELDS:
#   title        — Project name (displayed as H1 and in listings)
#   description  — One-line summary (shown on cards and meta tags)
#   technologies — Array of tech used (rendered as tag chips)
#   date         — Project start date (used for sorting)
#
# OPTIONAL FIELDS:
#   endDate         — When the project ended
#   github          — GitHub repo URL (shows "View on GitHub" link)
#   featured        — Set to true to show on the home page
#   archived        — Set to true to hide from main listing
#   status          — "complete" | "in-progress" | "planned" (drives badge color)
#   confidentiality — "public" | "nda" | "sanitized" (controls NDA notice)
#   role            — Your role on the project
#   tools           — Array of tools used (separate from technologies)
#
# AI PROMPT TO GENERATE A PROJECT WRITEUP:
#   "Write a technical case study for a project called [name]. Include sections:
#    Overview, Problem/Context, Approach, Architecture, Outcome, and Lessons
#    Learned. Use specific metrics where possible. Professional tone."
#
# LOGO MAPPING: If you want a company logo next to the project title, add
# the mapping in src/pages/projects/[...slug].astro in the projectLogos object.
#
# Schema defined in: src/content.config.ts (projects collection)
# Listed on: src/pages/projects/index.astro
# Detail page: src/pages/projects/[...slug].astro
# =============================================================================
title: "Example Project Name"
description: "One-line description of what this project does and why it matters."
technologies: ["TypeScript", "Python", "AWS"]
date: 2025-06-01
status: "complete"
confidentiality: "public"
role: "Developer"
featured: true
tools: ["VS Code", "Git", "Docker"]
github: "https://github.com/your-username/your-repo"
---

## Overview

<!-- TODO: Replace with your project overview -->
Describe what the project is, who it's for, and the key outcome in 2-3 sentences.

## Problem

What problem did this project solve? Why did it need to be built?

## Approach

How did you approach the solution? What design decisions did you make and why?

## Architecture

Describe the technical architecture. What components exist and how do they connect?

## Outcome

What were the measurable results? Use specific numbers where possible (e.g., "reduced processing time by 40%").

## Lessons Learned

What would you do differently? What did you learn that applies to future work?
