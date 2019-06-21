/*
npm install -D git-describe fs-extra
*/
const { gitDescribeSync } = require('git-describe');
const { version } = require('../package.json');
const { resolve, relative } = require('path');
const { writeFileSync } = require('fs-extra');
// const { moment } = require('moment');
// import * as moment from 'moment';
// import moment = require('moment');

const gitInfo = gitDescribeSync({
  dirtyMark: false,
  dirtySemver: false
});

gitInfo.version = version;

const dt = new Date();
gitInfo.dateVersion = `${dt.getFullYear()}.${dt.getMonth() + 1}.${dt.getDate()}.${dt.getHours()}:${dt.getMinutes()}`;

const file = resolve(__dirname, '..', 'src', 'environments', 'version.ts');
writeFileSync(
  file,
  `// IMPORTANT: THIS FILE IS AUTO GENERATED! DO NOT MANUALLY EDIT!
/* tslint:disable */
export const VERSION = ${JSON.stringify(gitInfo, null, 4)};
/* tslint:enable */
`,
  { encoding: 'utf-8' }
);

console.log(`Wrote version info ${gitInfo.raw} to ${relative(resolve(__dirname, '..'), file)}`);
