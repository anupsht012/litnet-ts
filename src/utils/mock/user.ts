import { IUser, IUserDetails } from "../models/user";

export const USER: IUser[] = [
    {id:1, username:'johndoe', email:'john@doe.com',password:'password', userDetail:1}
]

export const USER_DETAILS: IUserDetails[] = [
    {id:1,name:'John Doe', image:'', phone:'91232233', shortDescription:'this is short description'}
]


export const getAllUserDetails =(id:number)=>{
    const user = USER.find(v=> v.id === id);
    const userDetails = USER_DETAILS.find(v=> v.id===user?.userDetail);
    return {
        id: user?.id,
        username:user?.username,
        userDetail: userDetails 
    }
};


export const login = (username:string, password:string) =>{
    const isLoggedIn = USER.filter(v=> v.username === username && v.password === password);
    // if(isLoggedIn.length ===0){
    //     return 'fail'
    // }else{
    //     return 'success'
    // }

    return isLoggedIn.length === 0 ? 'fail':'success';
}