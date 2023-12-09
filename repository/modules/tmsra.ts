// 3rd's
import { type FetchOptions } from 'ofetch';
import { type AsyncDataOptions } from '#app';

// locals
import FetchFactory from '../factory';

type IParameter = {
    email: string
    systemId: string
    certReqCode: string
    username: string

    resultCode: string
    resultDesc: string
}

class AddUserEnrollModule extends FetchFactory<IParameter> {
    private RESOURCE = '/tmsra/addUserEnroll/v1';

    /**
     * Return the products as array 
     * @param asyncDataOptions options for `useAsyncData`
     * @returns 
     */
    async addUserEnroll(
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

class RetrieveCertInfoModule extends FetchFactory<IParameter> {
    private RESOURCE = '/tmsra/retrieveCertInfo/v1';

    /**
     * Return the products as array 
     * @param asyncDataOptions options for `useAsyncData`
     * @returns 
     */
    async retrieveCertInfo(
        certReqCode: string,
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
                            certReqCode: certReqCode,
                        }
                    }, // body
                    fetchOptions
                )
            },
            //   asyncDataOptions
        )
    }
}

class RetrieveUserInfoModule extends FetchFactory<IParameter> {
    private RESOURCE = '/tmsra/retrieveUserInfo/v1';

    /**
     * Return the products as array 
     * @param asyncDataOptions options for `useAsyncData`
     * @returns 
     */
    async retrieveUserInfo(
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
                            username: username,
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
    AddUserEnrollModule,
    RetrieveCertInfoModule,
    RetrieveUserInfoModule,
}