// 3rd's
import { type FetchOptions } from 'ofetch';
import { type AsyncDataOptions } from '#app';

// locals
import FetchFactory from '../factory';

type IParameter = {
  email: string
  password: string

  resultCode: string
  resultDesc: string
}

class LoginModule extends FetchFactory<IParameter> {
  private RESOURCE = '/digitalsign/loginCustomer/v1';

  /**
   * Return the products as array 
   * @param asyncDataOptions options for `useAsyncData`
   * @returns 
   */
  async loginUser(
    email: string,
    password: string,
    // asyncDataOptions?: AsyncDataOptions<IParameter>
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
                systemId: "TELKOM-GROUP",
                password: password
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
    LoginModule
  }