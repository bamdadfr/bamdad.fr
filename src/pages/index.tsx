import React from 'react';
import {GreetingsComponent} from '../components/greetings/greetings.component';
import {LanguagesComponent} from '../components/languages/languages.component';
import {DefaultLayout} from '../layouts/default/default.layout';

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div>
        <GreetingsComponent />
      </div>
      <div>
        <LanguagesComponent />
      </div>
    </DefaultLayout>
  );
}
