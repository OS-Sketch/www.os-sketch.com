#!/usr/bin/env bash

# install pipenv
pip3 install poetry
# install all dev dependencies (including mkdocs)
poetry install
# build mkdocs site
mkdocs build
