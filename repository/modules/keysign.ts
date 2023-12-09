// 3rd's
import { type FetchOptions } from 'ofetch';
import { type AsyncDataOptions } from '#app';

// locals
import FetchFactory from '../factory';

type IParameter = {
  email: string
  systemId: string
  keyid: string

  resultCode: string
  resultDesc: string
}

class GetCertificateChainModule extends FetchFactory<IParameter> {
  private RESOURCE = '/keysign/getCertificateChain/v1';

  /**
   * Return the products as array 
   * @param asyncDataOptions options for `useAsyncData`
   * @returns 
   */
  async getCertificateChain(
    email: string,
    systemId: string,
    // asyncDataOptions?: AsyncDataOptions<ICheckCertificate>
  ) {

    return useAsyncData(
      () => {
        const fetchOptions: FetchOptions<'json'> = {
          headers: {
            'Content-Type': 'application/json'
          }
        };

        return this.call(
          'POST',
          `${this.RESOURCE}`,
          {
            param: {
                email: email,
                systemId: systemId,
            }
          }, // body
          fetchOptions
        )
      },
    //   asyncDataOptions
    ) 
  }
}

class InquiryCertificateModule extends FetchFactory<IParameter> {
  private RESOURCE = '/keysign/inquiryCertificate/v1';

  /**
   * Return the products as array 
   * @param asyncDataOptions options for `useAsyncData`
   * @returns 
   */
  async inquiryCertificate(
    keyId: string,
    systemId: string,
    // asyncDataOptions?: AsyncDataOptions<ICheckCertificate>
  ) {

    return useAsyncData(
      () => {
        const fetchOptions: FetchOptions<'json'> = {
          headers: {
            'Content-Type': 'application/json'
          }
        };
        return this.call(
          'POST',
          `${this.RESOURCE}`,
          {
            param: {
                keyId: keyId,
                systemId: systemId,
            }
          }, // body
          fetchOptions
        )
      },
    //   asyncDataOptions
    ) 
  }
}

class InquiryCsrModule extends FetchFactory<IParameter> {
  private RESOURCE = '/keysign/inquiryCsr/v1';

  /**
   * Return the products as array 
   * @param asyncDataOptions options for `useAsyncData`
   * @returns 
   */
  async inquiryCsr(
    keyId: string,
    systemId: string,
    // asyncDataOptions?: AsyncDataOptions<ICheckCertificate>
  ) {

    return useAsyncData(
      () => {
        const fetchOptions: FetchOptions<'json'> = {
          headers: {
            'Content-Type': 'application/json'
          }
        };
        return this.call(
          'POST',
          `${this.RESOURCE}`,
          {
            param: {
                keyId: keyId,
                systemId: systemId,
            }
          }, // body
          fetchOptions
        )
      },
    //   asyncDataOptions
    ) 
  }
}

class RequestKeygenModule extends FetchFactory<IParameter> {
  private RESOURCE = '/keysign/requestKeygen/v1';

  /**
   * Return the products as array 
   * @param asyncDataOptions options for `useAsyncData`
   * @returns 
   */
  async requestKeygen(
    email: string,
    systemId: string,
    // asyncDataOptions?: AsyncDataOptions<ICheckCertificate>
  ) {

    return useAsyncData(
      () => {
        const fetchOptions: FetchOptions<'json'> = {
          headers: {
            'Content-Type': 'application/json'
          }
        };
        return this.call(
          'POST',
          `${this.RESOURCE}`,
          {
            param: {
                email: email,
                systemId: systemId,
            }
          }, // body
          fetchOptions
        )
      },
    //   asyncDataOptions
    ) 
  }
}

export {
  GetCertificateChainModule,
  InquiryCertificateModule,
  InquiryCsrModule,
  RequestKeygenModule
}