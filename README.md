# Distinguishing marks of a good module
## A.K.A. Unix's "leanest thing under 200loc that actually works"

> I have to admit something... in the past, I used to evaluate packages by looking at the Github page to see when it was last updated. If I see something that is more recent, it gets my tick of approval.
> Bad Chris!
> Now substack doesn't do that. He just wants the most dependable, easy to understand and smallest module he can find (or make) to fulfil his objective.
> In other words, he subscribes to the UNIX philosophy.

> [...]

> To him, it's about taking the time to understand the abstractions.

# substack drafts a new module

- *write a lot pseudoJS to "abstractify" the problem (added by me)*
- substack codes as usual:
  - Uses console.dir alot to inspect & debug
  - Didn't TDD - creates an example.js that requires the module and tests its functionality
  - Codes in vim & switches to a terminal every so often to run the example.js script
- If he notices an opportunity to modularise, he immediately moves the function into a new file & changes the function declaration to module.exports = ... (When I say immediately, I really do mean immediately).
- When he's happy with the module, npm install tape tap
- Refactors the example.js file as a set of tests (see below).
- Writes README.markdown from scratch with introduction, API documentation & license (API documentation is quick & easy to write when you have small modules).
- Runs pkginit to create package.json.
- Create GitHub repo and npm publish
- *Add travis and/or testling-ci github hooks as appropriate* (added by me)*

# 1 + 2 = 3 philosophy and mathematics are agreed on this proof

## PARAMETERS CODE 1/4 2 YEARS!!! TURTLES ALL THE WAY UP LOST

- abstract problem
- know which npm module(s) to use
- know which npm module(s) to write
- solve problem

- explore and get inspired; do a lot of online reading
- design stuff
  -	think of cool, new things to make
  -	draw & write
  -	spec ideas
  -	seek opinions of others
- cobble and ship code prodigiously
- read books on
  -	javascript
  -	programming
  -	math; number theory
- take math classes at OCC

- i can do anything i want using npm!
- but study how "they" do "the" anything
- at infinite

- real world thing
- modeled philsophically
- mathematical precision
- proofed in javascript

- you want it
- does 1 thing
- completely open-sourceable

-  "turtle"
- learn   do

- quickest path to a README

- events
- streams
- url
- path
- querystring