// 3rd's
import { $fetch, type FetchOptions } from 'ofetch';
import { useEnvironmentStore } from '~/store/sessionStorage'
// locals
import { LoginModule } from '~/repository/modules/login';
import {
  CheckCertificateModule,
  RenewalCertificateModule,
  FinishRegCaUsernameModule,
  FixingCertificateModule,
  FixingCertificateRenewalModule,
  ProvisionDigitalCertificateModule,
  UploadKTPModule
} from '~/repository/modules/ca';
import {
  DownloadDocumentModule,
  sendNotificationEmailModule
} from '~/repository/modules/signing';
import {
  GetCertificateChainModule,
  InquiryCertificateModule,
  InquiryCsrModule,
  RequestKeygenModule
} from '~/repository/modules/keysign';
import {
  AddUserEnrollModule,
  RetrieveCertInfoModule,
  RetrieveUserInfoModule,
} from '~/repository/modules/tmsra';

export interface IApiInstance {
  login: LoginModule;
  checkCertificate: CheckCertificateModule;
  renewalCertificate: RenewalCertificateModule;
  finishRegCaUsername: FinishRegCaUsernameModule;
  fixingCertificate: FixingCertificateModule;
  fixingCertificateRenewal: FixingCertificateRenewalModule;
  provisionDigitalCertificate: ProvisionDigitalCertificateModule;
  uploadKTP: UploadKTPModule;
  downloadDocument: DownloadDocumentModule;
  sendNotificationEmail: sendNotificationEmailModule;
  getCertificateChain: GetCertificateChainModule;
  inquiryCertificate: InquiryCertificateModule;
  inquiryCsr: InquiryCsrModule;
  requestKeygen: RequestKeygenModule;
  addUserEnroll: AddUserEnrollModule;
  retrieveCertInfo: RetrieveCertInfoModule;
  retrieveUserInfo: RetrieveUserInfoModule;
}

export default defineNuxtPlugin((nuxtApp) => {

  const config = useRuntimeConfig();
  const environmentStore = useEnvironmentStore()
  const environment = ref('production');

  const modules = reactive<IApiInstance>({
    login: null as any,
    checkCertificate: null as any,
    renewalCertificate: null as any,
    finishRegCaUsername: null as any,
    fixingCertificate: null as any,
    fixingCertificateRenewal: null as any,
    provisionDigitalCertificate: null as any,
    uploadKTP: null as any,
    downloadDocument: null as any,
    sendNotificationEmail: null as any,
    getCertificateChain: null as any,
    inquiryCertificate: null as any,
    inquiryCsr: null as any,
    requestKeygen: null as any,
    addUserEnroll: null as any,
    retrieveCertInfo: null as any,
    retrieveUserInfo: null as any,
  });

  const fetchOptions: FetchOptions = {
    baseURL: environment.value === 'production' ? config.public.apiBaseUrlProd : config.public.apiBaseUrlDev,
    headers: {
      'x-Gateway-APIKey': config.public.apiKeyProd,
    },

  };

  const apiFetcher = $fetch.create(fetchOptions);

  modules.login = new LoginModule(apiFetcher);
  modules.checkCertificate = new CheckCertificateModule(apiFetcher);
  modules.renewalCertificate = new RenewalCertificateModule(apiFetcher);
  modules.finishRegCaUsername = new FinishRegCaUsernameModule(apiFetcher);
  modules.fixingCertificate = new FixingCertificateModule(apiFetcher);
  modules.fixingCertificateRenewal = new FixingCertificateRenewalModule(apiFetcher);
  modules.provisionDigitalCertificate = new ProvisionDigitalCertificateModule(apiFetcher);
  modules.uploadKTP = new UploadKTPModule(apiFetcher);
  modules.downloadDocument = new DownloadDocumentModule(apiFetcher);
  modules.sendNotificationEmail = new sendNotificationEmailModule(apiFetcher);
  modules.getCertificateChain = new GetCertificateChainModule(apiFetcher);
  modules.inquiryCertificate = new InquiryCertificateModule(apiFetcher);
  modules.inquiryCsr = new InquiryCsrModule(apiFetcher);
  modules.requestKeygen = new RequestKeygenModule(apiFetcher);
  modules.addUserEnroll = new AddUserEnrollModule(apiFetcher);
  modules.retrieveCertInfo = new RetrieveCertInfoModule(apiFetcher);
  modules.retrieveUserInfo = new RetrieveUserInfoModule(apiFetcher);

  watch(() => environmentStore.environment, (newEnv) => {

    environment.value = newEnv

    const fetchOptions: FetchOptions = {
      baseURL: environment.value === 'production' ? config.public.apiBaseUrlProd : config.public.apiBaseUrlDev,
      headers: {
        'x-Gateway-APIKey': config.public.apiKeyProd,
      },

    };

    const apiFetcher = $fetch.create(fetchOptions);

    modules.checkCertificate = new CheckCertificateModule(apiFetcher);
    modules.renewalCertificate = new RenewalCertificateModule(apiFetcher);
    modules.finishRegCaUsername = new FinishRegCaUsernameModule(apiFetcher);
    modules.fixingCertificate = new FixingCertificateModule(apiFetcher);
    modules.fixingCertificateRenewal = new FixingCertificateRenewalModule(apiFetcher);
    modules.provisionDigitalCertificate = new ProvisionDigitalCertificateModule(apiFetcher);
    modules.uploadKTP = new UploadKTPModule(apiFetcher);
    modules.downloadDocument = new DownloadDocumentModule(apiFetcher);
    modules.sendNotificationEmail = new sendNotificationEmailModule(apiFetcher);
    modules.getCertificateChain = new GetCertificateChainModule(apiFetcher);
    modules.inquiryCertificate = new InquiryCertificateModule(apiFetcher);
    modules.inquiryCsr = new InquiryCsrModule(apiFetcher);
    modules.requestKeygen = new RequestKeygenModule(apiFetcher);
    modules.addUserEnroll = new AddUserEnrollModule(apiFetcher);
    modules.retrieveCertInfo = new RetrieveCertInfoModule(apiFetcher);
    modules.retrieveUserInfo = new RetrieveUserInfoModule(apiFetcher);

  })

  return {
    provide: {
      api: modules
    }
  };

});
