

export async function download_datafetcher() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/event/`, {
      method: "GET",
      cache: "no-store",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error in fetching download  data");
  }
}

export async function event_datafetcher() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/event/`, {
      method: "GET",
      cache: "no-store",
    });
    const temp = await response.json();
    const data = temp.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    return data;
  } catch (error) {
    console.log("error in fetching event  data");
  }
}

export async function event_home_datafetcher() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/event/`, {
      method: "GET",
      cache: "no-store",
    });
    const temp = await response.json();
    const data = temp.slice(0, 3);
    return data;
  } catch (error) {
    console.log("error in fetching event home data");
  }
}

export async function eventhost_datafetcher(id) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/eventhost/?event=${id}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error in fetching eventhost  data");
  }
}

export async function eventimages_datafetcher(id) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/eventimages/?event=${id}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error in fetching eventimages  data");
  }
}
export async function eventvideo_datafetcher() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/eventvideo/`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error in fetching eventvideo  data");
  }
}

export async function event_innner_datafetcher(id) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/event/?id=${id}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error in fetching event inner  data");
  }
}

export async function news_home_datafetcher() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/news/`, {
      method: "get",
      cache: "no-cache",
    });
    const temp = await response.json();
    const data = temp.slice(0, 5).reverse();
    return data;
  } catch (error) {
    console.log("error in fetching news home data");
  }
}

export async function all_news_datafetcher() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/news/`, {
      method: "get",
      cache: "no-cache",
    });
    const temp = await response.json();
    const data = temp.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    return data;
  } catch (error) {
    console.log("error in fetching news  data");
  }
}

export async function news_inner_datafetcher(id) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/news/?id=${id}`,
      {
        method: "get",
        cache: "no-cache",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error in fetching news inner  data");
  }
}

export async function achivement_home_datafetcher() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/achivementmember/`,
      {
        method: "get",
        cache: "no-cache",
      }
    );
    const temp = await response.json();
    const data = temp.slice(0, 3).reverse();
    return data;
  } catch (error) {
    console.log("error in fetching  achivement home data");
  }
}

export async function testimonials_home_datafetcher() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/testimonials/`,
      {
        method: "get",
        cache: "no-cache",
      }
    );
    const temp = await response.json();
    const data = temp.slice(0, 6).reverse();
    return data;
  } catch (error) {
    console.log("error in fetching  testimonials home data");
  }
}

export async function faculty_datafetcher() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/faculty/`,
      {
        method: "GET",
        cache: "no-cache",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error in fetching faculty  data");
  }
}
export async function faculty_inner_datafetcher(id) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/faculty/?id=${id}`,
      {
        method: "GET",
        cache: "no-cache",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error in fetching faculty inner data");
  }
}

export async function aboutus_datafetcher() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/aboutus/`,
      {
        method: "get",
        cache: "no-cache",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error in fetching aboutus  data");
  }
}

export async function histosa_datafetcher() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/histosa/`,
      {
        method: "get",
        cache: "no-cache",
      }
    );
    const temp = await response.json();
    const data = temp.slice(0, 6).reverse();
    return data;
  } catch (error) {
    console.log("error in fetching histosa  data");
  }
}

export async function histosa_execome_datafetcher() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/histosaexecome/`,
      {
        method: "get",
        cache: "no-cache",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error in fetching histosa_execome  data");
  }
}

export async function histosa_activity_datafetcher() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/activity/`,
      {
        method: "get",
        cache: "no-cache",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error in fetching histosa_activity  data");
  }
}

export async function histosa_reports_datafetcher() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/alumnireports/`,
      {
        method: "get",
        cache: "no-cache",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error in fetching alumnireports  data");
  }
}
export async function histosa_gallery_datafetcher() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/activityimage/`,
      {
        method: "get",
        cache: "no-cache",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error in fetching activityimage  data");
  }
}

export async function blog_inner_datafetcher(id) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/blog/?id=${id}`,
      {
        method: "GET",
        cache: "no-cache",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error in fetching blog_inner  data");
  }
}

export async function blog__datafetcher(id) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog`, {
      method: "GET",
      cache: "no-cache",
    });
    const temp = await response.json();
    const data = temp.filter((x) => x.is_accepted == true);
    return data;
  } catch (error) {
    console.log("error in fetching blog  data");
  }
}

export async function Research_guide_datafetcher() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/researchguide`,
      {
        method: "GET",
        cache: "no-cache",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error in fetching research guide  data");
  }
}

export async function phdproduced_datafetcher() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/phdproduced/`,
      {
        method: "get",
        cache: "no-cache",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error in fetching research phdproduced  data");
  }
}

export async function Research_scholar_datafetcher() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/researchscholar/`,
      {
        method: "get",
        cache: "no-cache",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error in fetching researchscholar  data");
  }
}



export async function center_datafetcher() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/center/`,
      {
        method: "get",
        cache: "no-cache",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error in fetching center data");
  }
}

export async function center_sidebar_datafetcher(id) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/centersidebar/?center=${id}`,
      {
        method: "get",
        cache: "no-cache",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error in fetching centersidebar data");
  }
}
export async function center_head_datafetcher(id) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/center/?id=${id}`,
      {
        method: "get",
        cache: "no-cache",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error in fetching centerhead data");
  }
}

export async function center_inner_datafetcher(id) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/centersidebaritem/?sidebar=${id}`,
      {
        method: "get",
        cache: "no-cache",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error in fetching center inner data");
  }
}

export async function center_for_navbar_datafetcher(id) {
  try {
    const response2 = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/centersidebar/?center=${id}`,
      {
        method: "get",
        cache: "no-cache",
      }
    );
    const data2 = await response2.json();
    const id_2 = data2[0]?.id;
    return id_2;
  } catch (error) {
    console.log("error in fetching center inner data");
  }
}





export async function achivement_datafetcher() {
  try {
    const response1 = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/achivement/`,
      {
        method: "get",
        cache: "no-cache",
      }
    );
    const response2 = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/achivementcountup/`,
      {
        method: "get",
        cache: "no-cache",
      }
    );
    const response3 = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/achivementmember/`,
      {
        method: "get",
        cache: "no-cache",
      }
    );
    const data = await response1.json();
    const countup=await response2.json()
    const achivement=await response3.json()
    const studentdata = achivement.filter((x) => 
      x.is_student === true
    );
    const facultydata = achivement.filter((x) => 
      x.is_student === false
    );
    return{data,countup,studentdata,facultydata,achivement}
  } catch (error) {
    console.log("error in fetching achivement  data");
  }
}


export async function About_countup_datafetcher() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/countup/`,
      {
        method: "get",
        cache: "no-cache",
      }
    );
    const countup = await response.json();
    return countup;
  } catch (error) {
    console.log("error in fetching abot counter  data");
  }
}



export async function programme_datafetcher() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/program/`,
      {
        method: "get",
        cache: "no-cache",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error in fetching program  data");
  }
}
