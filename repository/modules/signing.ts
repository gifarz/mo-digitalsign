// 3rd's
import { type FetchOptions } from 'ofetch';
import { type AsyncDataOptions } from '#app';

// locals
import FetchFactory from '../factory';

type IParameter = {
  email: string
  systemId: string
  orderId: string
  notifType: string
  orderType: string
  remark: string

  resultCode: string
  resultDesc: string
}

class DownloadDocumentModule extends FetchFactory<IParameter> {
  private RESOURCE = '/digitalsign/downloadDocument/v1';

  /**
   * Return the products as array 
   * @param asyncDataOptions options for `useAsyncData`
   * @returns 
   */
  async downloadDocument(
    orderId: string,
    // asyncDataOptions?: AsyncDataOptions<ICheckCertificate>
  ) {

    return useAsyncData(
      () => {
        const fetchOptions: FetchOptions<'json'> = {
          headers: {
            'Content-Type': 'application/json'
          }
        };

        console.log('module', orderId)

        return this.call(
          'POST',
          `${this.RESOURCE}`,
          {
            param: {
                orderId: orderId
            }
          }, // body
          fetchOptions
        )
      },
    //   asyncDataOptions
    ) 
  }
}

class sendNotificationEmailModule extends FetchFactory<IParameter> {
    private RESOURCE = '/digitalsign/sendNotificationEmail/v1';
  
    /**
     * Return the products as array 
     * @param asyncDataOptions options for `useAsyncData`
     * @returns 
     */
    async sendNotificationEmail(
        email: string,
        systemId: string,
        orderId: string,
        notifType: string,
        orderType: string,
        remark: string
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
                  orderId: orderId,
                  notifType: notifType,
                  orderType: orderType,
                  remark: remark,
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
    DownloadDocumentModule,
    sendNotificationEmailModule
}