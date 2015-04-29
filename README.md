# Chondrite

A Meteor JS project boilerplate/skeleton.

## Work in progress
This isn't ready for primetime yet.

## Install
* [Download the files](https://github.com/scimusmn/chondrite/archive/master.zip)
* Copy to your desired location
* `cp settings/settings.default.json settings/settings.json`
* Edit settings/settings.json adding your details. This file is ignored

## Biases
We use Meteor for some specific purposes that might not be applicable to
everyone. Here are some of the entirely self-centered biases that you'll see in
this boilerplate.

* I generally like flat document structures. We don't work on huge
  applications, so I'd rather have things one or two levels in vs. seven.
* I don't feel like it's neccesary to indicate the server/client/both breakdown
  in the folder structure. There's obviously still a server and client folder,
  but things like the router, don't need an extra folder to indicate that they
  execute in both.
* We generally use Meteor to make kiosk applications that run locally.

# TODO
- [x] Implement spinner for page loading
- [ ] Implement Bootstrap...less?
- [ ] Create a homepage route

## Credit
Many of the ideas for this structure are cribbed from these other great boilerplates and guides:
* [Void](https://github.com/SachaG/Void)
* [Differential's meteor-boilerplate](https://github.com/Differential/meteor-boilerplate)
* [matteodem's meteor-boilerplate](https://github.com/matteodem/meteor-boilerplate)
* Jonathan Linowes Meteor Boilerplate breakdown [blog post](https://medium.com/things-i-did-and-learned-today/in-search-of-a-meteor-boilerplate-6f01fe5abfd1) / [spreadsheet](https://docs.google.com/a/smm.org/spreadsheets/d/1ZL5884zIRETLgSZr4n3ButsoPLxXQFom7VMtxZ4G4gk/edit)
