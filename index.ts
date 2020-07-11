import sdk from '@stackblitz/sdk';
import './styles.css';

// Open the RealWorld Angular repo in a new window on StackBlitz
// https://github.com/gothinkster/angular-realworld-example-app
window['openGithubProject'] = () => {
  sdk.openGithubProject('duodata/biocomp-frontend');
}

// Embed the RealWorld Angular repo on this page
window['embedGithubProject'] = () => {
  sdk.embedGithubProject(
    'myDiv',
    'iammelvin/ngrx-data-lab',
    { height: 320 }
  );
}