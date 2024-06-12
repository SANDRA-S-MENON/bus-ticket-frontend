import React from 'react'

const ViewAll = () => {
    return (
        <div>
            <div className="container">
                <div className="row" g-3>
                    <div className="col col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table" border="4">
                            <thead>
                                <tr>
                                    <th scope="col">name</th>
                                    <th scope="col">date</th>
                                    <th scope="col">address</th>
                                    <th scope="col">place</th>
                                    <th scope="col">to</th>
                                    <th scope="col">from</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    
                                    <td>san</td>
                                    <td>01/01/01</td>
                                    <td>abcd</td>
                                    <td>tcr</td>
                                    <td>tcr</td>
                                    <td>tvm</td>
                                </tr>
                                



                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll