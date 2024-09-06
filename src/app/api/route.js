


export async function  event_home_datafetcher(){
    try {
        const response=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/event/`,{
            method:"GET",
            cache:"no-store"
        })
        const temp=await response.json()
        const data=temp.slice(0,3)
        return data
    } catch (error) {
       console.log("error in fetching event home data");
    }
}

export async function  event_datafetcher(){
    try {
        const response=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/event/`,{
            method:"GET",
            cache:"no-store"
        })
        const data=await response.json()
        return data
    } catch (error) {
       console.log("error in fetching event  data");
    }
}

export async function  eventhost_datafetcher(){
    try {
        const response=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/eventhost/`,{
            method:"GET",
            cache:"no-store"
        })
        const data=await response.json()
        return data
    } catch (error) {
       console.log("error in fetching eventhost  data");
    }
}

export async function  eventimages_datafetcher(){
    try {
        const response=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/eventimages/`,{
            method:"GET",
            cache:"no-store"
        })
        const data=await response.json()
        return data
    } catch (error) {
       console.log("error in fetching eventimages  data");
    }
}
export async function  eventvideo_datafetcher(){
    try {
        const response=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/eventvideo/`,{
            method:"GET",
            cache:"no-store"
        })
        const data=await response.json()
        return data
    } catch (error) {
       console.log("error in fetching eventvideo  data");
    }
}

export async function  event_innner_datafetcher(id){
    try {
        const response=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/event/?id=${id}`,{
            method:"GET",
            cache:"no-store"
        })
        const data=await response.json()
        return data
    } catch (error) {
       console.log("error in fetching event inner  data");
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

export async function  all_news_datafetcher(){
    try {
        const response=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/news/`,{
            method:"get",
            cache:"no-cache"
        })
        const data=await response.json()
        return data
    } catch (error) {
       console.log("error in fetching news  data");
    }
}

export async function  news_inner_datafetcher(id){
    try {
        const response=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/news/?id=${id}`,{
            method:"get",
            cache:"no-cache"
        })
        const data=await response.json()
        return data
    } catch (error) {
       console.log("error in fetching news inner  data");
    }
}


export async function  achivement_home_datafetcher(){
    try {
        const response=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/achivementmember/`,{
            method:"get",
            cache:"no-cache"
        })
        const temp=await response.json()
        const data=temp.slice(0,3).reverse()
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
            method:"GET",
            cache:"no-cache"
        })
        const data=await response.json()
        return data
    } catch (error) {
       console.log("error in fetching faculty  data");
    }
}
export async function  faculty_inner_datafetcher(id){
    try {
        const response=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/faculty/?id=${id}`,{
            method:"GET",
            cache:"no-cache"
        })
        const data=await response.json()
        return data
    } catch (error) {
       console.log("error in fetching faculty inner data");
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


export async function  histosa_datafetcher(){
    try {
        const response=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/histosa/`,{
            method:"get",
            cache:"no-cache"
        })
        const temp=await response.json()
        const data=temp.slice(0,6).reverse()
        return data
    } catch (error) {
       console.log("error in fetching histosa  data");
    }
}

export async function  histosa_execome_datafetcher(){
    try {
        const response=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/histosaexecome/`,{
            method:"get",
            cache:"no-cache"
        })
        const data=await response.json()
        return data
    } catch (error) {
       console.log("error in fetching histosa_execome  data");
    }
}


export async function  histosa_activity_datafetcher(){
    try {
        const response=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/activity/`,{
            method:"get",
            cache:"no-cache"
        })
        const data=await response.json()
        return data
    } catch (error) {
       console.log("error in fetching histosa_activity  data");
    }
}



export async function  histosa_reports_datafetcher(){
    try {
        const response=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/alumnireports/`,{
            method:"get",
            cache:"no-cache"
        })
        const data=await response.json()
        return data
    } catch (error) {
       console.log("error in fetching alumnireports  data");
    }
}
export async function  histosa_gallery_datafetcher(){
    try {
        const response=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/activityimage/`,{
            method:"get",
            cache:"no-cache"
        })
        const data=await response.json()
        return data
    } catch (error) {
       console.log("error in fetching activityimage  data");
    }
}

export async function  blog_inner_datafetcher(id){
    try {
        const response=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/?id=${id}`,{
            method:"GET",
            cache:"no-cache"
        })
        const data=await response.json()
        return data
    } catch (error) {
       console.log("error in fetching blog_inner  data");
    }
}




export async function  Research_guide_datafetcher(){
    try {
        const response=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/researchguide`,{
            method:"GET",
            cache:"no-cache"
        })
        const data=await response.json()
        return data
    } catch (error) {
       console.log("error in fetching research guide  data");
    }
}

export async function  phdproduced_datafetcher(){
    try {
        const response=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/phdproduced/`,{
            method:"get",
            cache:"no-cache"
        })
        const data=await response.json()
        return data
    } catch (error) {
       console.log("error in fetching research phdproduced  data");
    }
}



export async function  Research_scholar_datafetcher(){
    try {
        const response=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/researchscholar/`,{
            method:"get",
            cache:"no-cache"
        })
        const data=await response.json()
        return data
    } catch (error) {
       console.log("error in fetching researchscholar  data");
    }
}


export async function  programme_datafetcher(){
    try {
        const response=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/program/`,{
            method:"get",
            cache:"no-cache"
        })
        const data=await response.json()
        return data
    } catch (error) {
       console.log("error in fetching programme data");
    }
}




