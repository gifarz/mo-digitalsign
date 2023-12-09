// 3rd's
import { type FetchOptions } from 'ofetch';
import { type AsyncDataOptions } from '#app';

// locals
import FetchFactory from '../factory';

type IParameter = {
  email: string
  systemId: string
  username: string,
  ktpPhoto: string

  resultCode: string
  resultDesc: string
}

class CheckCertificateModule extends FetchFactory<IParameter> {
  private RESOURCE = '/digitalsign/checkCertificate/v1';

  /**
   * Return the products as array 
   * @param asyncDataOptions options for `useAsyncData`
   * @returns 
   */
  async checkCertificate(
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

class RenewalCertificateModule extends FetchFactory<IParameter> {
  private RESOURCE = '/digitalsign/renewalCertificate/v1';

  /**
   * Return the products as array 
   * @param asyncDataOptions options for `useAsyncData`
   * @returns 
   */
  async renewalCertificate(
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

class FinishRegCaUsernameModule extends FetchFactory<IParameter> {
  private RESOURCE = '/manageOperation/finishRegCaByUsername/v1';

  /**
   * Return the products as array 
   * @param asyncDataOptions options for `useAsyncData`
   * @returns 
   */
  async finishRegCaByUsername(
    username: string,
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
              email: username,
            }
          }, // body
          fetchOptions
        )
      },
      //   asyncDataOptions
    )
  }
}

class FixingCertificateModule extends FetchFactory<IParameter> {
  private RESOURCE = '/manageOperation/fixingCertificate/v1';

  /**
   * Return the products as array 
   * @param asyncDataOptions options for `useAsyncData`
   * @returns 
   */
  async fixingCertificate(
    username: string,
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
              email: username
            }
          }, // body
          fetchOptions
        )
      },
      //   asyncDataOptions
    )
  }
}

class FixingCertificateRenewalModule extends FetchFactory<IParameter> {
  private RESOURCE = '/manageOperation/fixingCertificateRenewal/v1';

  /**
   * Return the products as array 
   * @param asyncDataOptions options for `useAsyncData`
   * @returns 
   */
  async fixingCertificateRenewal(
    username: string,
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
              email: username,
            }
          }, // body
          fetchOptions
        )
      },
      //   asyncDataOptions
    )
  }
}

class ProvisionDigitalCertificateModule extends FetchFactory<IParameter> {
  private RESOURCE = '/manageOperation/provisionDigitalCertificate/v1';

  /**
   * Return the products as array 
   * @param asyncDataOptions options for `useAsyncData`
   * @returns 
   */
  async provisionDigitalCertificate(
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

class UploadKTPModule extends FetchFactory<IParameter> {
  private RESOURCE = '/digitalsign/uploadKTP/v1';

  /**
   * Return the products as array 
   * @param asyncDataOptions options for `useAsyncData`
   * @returns 
   */
  async uploadKtp(
    email: string,
    systemId: string,
    ktpPhoto: string
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
              ktpPhoto: ktpPhoto
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
  CheckCertificateModule,
  RenewalCertificateModule,
  FinishRegCaUsernameModule,
  FixingCertificateModule,
  FixingCertificateRenewalModule,
  ProvisionDigitalCertificateModule,
  UploadKTPModule
}