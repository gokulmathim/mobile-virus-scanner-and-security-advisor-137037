#!/bin/bash
cd /home/kavia/workspace/code-generation/mobile-virus-scanner-and-security-advisor-137037/virus_detection_mobile_app
npx eslint 
$ESLINT_EXIT_CODE
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

