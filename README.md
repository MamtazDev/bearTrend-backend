<!-- Live server url:  -->

<!-- // post method -->

1. add new driver
2. add new trucks

<!-- //update -->

1.  update driver profile ------post method
2.  update manager profile ------post method

<!-- authorization  -->

1.Request For Authorization ------post method

<!-- // post method -->

<!-- get method -->

1. get all trucks
2. get all drivers
3. get Total drivers in practice----sort from all request list
4. get Total requests ---------all request

<!-- auth  -->

###### routes

# auth--done

1. /api/user/signUp
2. /api/user/login
3. /api/user/getAllUser

# driver--done

1. /api/driver/addNewDriver ----------post
2. /api/driver/allDriverList -----------get
3. /api/driver/updateDriverProfile --------patch

# trucks --done

1. /api/trucks/addNewTrucks----------post
2. /api/trucks/getAllTrucks ----------get
3. /api/trucks/getTruckById ----------get

# authorization

1. /api/authorization/requestForAuthorization ----------post -----------> manager can request
2. /api/authorization/getAllAuthorizationRequest ----------get

# manager

1. /api/manager/updateProfile --------- patch
2. /api/

## manager can see the truck list that is assigned to him

Hello,

This is the checklist for the app

# Admin/Owner:

    - Can do all operations in trucks
    - Can do all operations in the requests
    - Can do all operations with drivers

# Manager

    - Can see the trucks assigned to his company
    - Can request an authorization to any driver to his trucks
    - Can see the status of the drivers assigned to his trucks

# Driver

    - Can see the status of his assignments
