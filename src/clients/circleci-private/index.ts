import { HTTPClient } from '../circleci/httpClient.js';
import { createCircleCIHeaders } from '../circleci/index.js';
import { JobsPrivate } from './jobsPrivate.js';
import { MeAPI } from './me.js';

const defaultPrivateHTTPClient = (token: string) =>
  new HTTPClient(
    'https://circleci.com/api/private',
    createCircleCIHeaders({ token }),
  );

export class CircleCIPrivateClients {
  public me: MeAPI;
  public jobs: JobsPrivate;
  constructor({
    token,
    privateHTTPClient = defaultPrivateHTTPClient(token),
  }: {
    token: string;
    privateHTTPClient?: HTTPClient;
  }) {
    this.me = new MeAPI(privateHTTPClient);
    this.jobs = new JobsPrivate(privateHTTPClient);
  }
}
