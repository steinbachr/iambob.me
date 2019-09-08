---
layout: home
schema:
- type: Person
  properties:
    alumniOf:
      address: 360 Huntington Ave, Boston, MA 02115
      legalName: Northeastern University
      logo: http://saldef.org/wp-content/uploads/2011/06/northeastern-university-logo.jpg
    givenName: Bobby
    familyName: Steinbach
    name: Bobby Steinbach
    email: me@iambob.me

---
## Hey There!

I'm Bobby. Currently, I'm living and working out of NYC where I'm the Director of Engineering for [Morgan & Morgan](https://www.forthepeople.com).

## Popular Blog Posts

In a past life I was a more active blogger. Unfortunately, that's pretty much fallen by the wayside (completely) over the past few years.

That said, there were a few posts that received a decent reception, including:

* [Custom application metrics with Django, Prometheus, and Kubernetes](https://labs.meanpug.com/custom-application-metrics-with-django-prometheus-and-kubernetes/)
* [Django on Kubernetes - As Concisely as Possible](https://labs.meanpug.com/django-on-kubernetes-as-concisely-as-possible/)
* [Accessing Google Analytics from Django](https://blog.iambob.me/accessing-google-analytics-from-django/)
* [The Super Stupid Idiot's Guide To Getting Started With Django, Pipeline, and S3](https://blog.iambob.me/the-super-stupid-idiots-guide-to-getting-started-with-django-pipeline-and-s3/)
* [Making a POST Request In An Android App (And Why I Hate Java)](https://blog.iambob.me/making-a-post-request-from-android-app/)
* [Death to the Technical Interview](https://blog.iambob.me/death-to-the-technical-interview/)
* [Folk to EDM: The Top 10 Artists To Code To](https://blog.iambob.me/folk-to-edm-the-top-10-artists-to-code-to/)

## Featured Projects

Many of my projects are a bit more sensitive in nature (a crypto cross-exchange arbitrage bot, for example) so I can't put them here, unfortunately. But if you buy me a coffee, I'd love to share :)

Anyways, here is a less comprehensive list of things I've worked on:

#### World Cup Challenge ([https://github.com/steinbachr/world-cup-challenge](https://github.com/steinbachr/world-cup-challenge))

The World Cup Challenge was a competition put forth by [FootballRadar](https://www.footballradar.com/) which asked its participants to write a
program that would - for each team in the World Cup - print out the probability of that team being knocked out in group, 2nd round, etc. and ending with the probability of that team winning the cup.
My model happened to be the winning one and relied on a number of different factors to choose probabilities including:

* player skill scores
* team chemistry scores
* fifa rank
* number of "stars" on the team
* and past international results

#### PyChorus ([https://github.com/steinbachr/pychorus](https://github.com/steinbachr/pychorus))

I wish I had spent more time with this, but my attention ended up getting pulled elsewhere. The goal of the project was to isolate the
chorus of a given song, either printing out the boundaries or cutting the segment out into a separate sound file depending on command line
switches.