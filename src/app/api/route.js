


export async function  event_home_datafetcher(){
    try {
        const response=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/event/`,{
            method:"get",
            cache:"no-cache"
        })
        const data=await response.json()
        return data
    } catch (error) {
       console.log("error in fetching event home data");
    }
}

export async function  news_home_datafetcher(){
    try {
        const response=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/news/`,{
            method:"get",
            cache:"no-cache"
        })
        const temp=await response.json()
        const data=temp.slice(0,5).reverse()
        return data
    } catch (error) {
       console.log("error in fetching news home data");
    }
}


export async function  achivement_home_datafetcher(){
    try {
        const response=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/achivementmember/`,{
            method:"get",
            cache:"no-cache"
        })
        const temp=await response.json()
        const data=temp.slice(0,2).reverse()
        return data
    } catch (error) {
       console.log("error in fetching  achivement home data");
    }
}

export async function  testimonials_home_datafetcher(){
    try {
        const response=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/testimonials/`,{
            method:"get",
            cache:"no-cache"
        })
        const temp=await response.json()
        const data=temp.slice(0,6).reverse()
        return data
    } catch (error) {
       console.log("error in fetching  testimonials home data");
    }
}


export async function  faculty_datafetcher(){
    try {
        const response=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/faculty/`,{
            method:"get",
            cache:"no-cache"
        })
        const temp=await response.json()
        const data=temp.slice(0,6).reverse()
        return data
    } catch (error) {
       console.log("error in fetching faculty home data");
    }
}


export async function  aboutus_datafetcher(){
    try {
        const response=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/aboutus/`,{
            method:"get",
            cache:"no-cache"
        })
        const temp=await response.json()
        const data=temp.slice(0,6).reverse()
        return data
    } catch (error) {
       console.log("error in fetching aboutus  data");
    }
}
