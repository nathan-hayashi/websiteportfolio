---
# =============================================================================
# CERTIFICATION TEMPLATE
# =============================================================================
# This is an example certification entry. Duplicate for each credential.
# The filename becomes the URL slug: /certifications/example-certification
#
# REQUIRED FIELDS:
#   title  — Certification name (e.g., "AWS Solutions Architect – Associate")
#   date   — Date achieved or target date for planned certs
#   status — "active" | "in-progress" | "planned" | "expired"
#
# OPTIONAL FIELDS:
#   vendor         — Issuing organization (e.g., "CompTIA", "AWS", "Microsoft")
#   proof          — Credly badge URL or verification link
#   expirationDate — For certs that require renewal
#
# LOGO MAPPING: If you want a vendor logo next to the cert, add the mapping
# in both src/pages/certifications/index.astro and [...slug].astro in the
# certLogos object.
#
# AI PROMPT TO GENERATE CERT CONTENT:
#   "Write a brief description of the [Certification Name] certification.
#    Include: what it validates, the domains/topics covered (as a numbered
#    list), and why it's relevant to [your target role]."
#
# Schema defined in: src/content.config.ts (certifications collection)
# Listed on: src/pages/certifications/index.astro
# Detail page: src/pages/certifications/[...slug].astro
# =============================================================================
title: "Example Certification Name"
vendor: "Certification Vendor"
date: 2025-01-01
proof: "https://www.credly.com/badges/your-badge-id"
status: "active"
---

# Example Certification Name

<!-- TODO: Replace with your certification description -->
Brief description of what this certification validates and its industry recognition.

## Domains Covered

1. **Domain One** — Description of what this domain covers
2. **Domain Two** — Description of what this domain covers
3. **Domain Three** — Description of what this domain covers

## Why This Certification

Explain why you pursued this certification and how it relates to your career goals.
