#!/bin/bash
npm ci ---omit=dev
npm cache clean -g --force