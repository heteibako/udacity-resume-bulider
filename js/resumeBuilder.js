/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
  name: "Szabi Hetei-Bako",
  role: "Junior frontend developer",
  contacts: {
    mobile: "+4915255679373",
    email: "hetei_bako@yahoo.com",
    github: "github.com/heteibako",
    twitter: "twitter.com/heteibako",
    location: "Berlin"
  },
  welcomeMessage: "I am an enthusiastic creative person who has a big willing to learn and like to be surrounded with talented people.",
  skills: [
    "HTML ",
    " CSS ",
    " JavaScript ",
    " jQuery ",
    " Bootstrap ",
    " Foundation ",
    " SQL "
  ],
  biopic: "images/szabi.jpg"
};




bio.display = function() {

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var picture = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

  $("#header").append(formattedName).append(formattedRole).append(picture).append(formattedWelcome);

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
      var formattedSkills = HTMLskills.replace('%data%', bio.skills[i]);
      $("#skills").append(formattedSkills);
    }
  }

  var formattedContactInfo = [];
  formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
  formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
  formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
  formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

  for (var k = 0; k < formattedContactInfo.length; k++) {
    $("#topContacts, #footerContacts").append(formattedContactInfo[k]);
  }
};

bio.display();


var work = {
  jobs: [{
    employer: "Budapest Summer Festival",
    title: "Web developer, graphic designer",
    location: "Budapest",
    dates: "May, 2007 - May, 2009",
    description: "I was responsible for maintaining the company's website." + "Meeting with new clients and building online ad platforms for their needs from scratch to production." + "I was working as a photographer as well due to my previous photography studies." + "I was involved as a graphic designer in a bigger campaign for Paolita swimwear company."
  }, {
    employer: "Dewar Studios",
    title: "Web developer, graphic designer",
    location: "London",
    dates: "May, 2011 - August, 2012",
    description: "I was responsible for creating the online, printed and television advertisements designing, coding and maintaining microsites for various performances of the festival." + "I was in contact with the printshops and the tv stations sending brochure, poster designs and animated video ads on a daily basis." + "I had a lot of freedom in the creative process."
  }, {
    employer: "Self employed",
    title: "Web developer, graphic designer",
    location: "Budapest",
    dates: "May, 2013 - ongoing",
    description: "Building websites for clients from Germany, Hungary and the USA"
  }]
};

work.display = function() {

  for (var i = 0; i < work.jobs.length; i++) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
    var formattedWorkTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
    var formattedWorkDates = HTMLworkDates.replace('%data%', work.jobs[i].dates);
    var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
    var formattedWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);

    var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

    $(".work-entry:last").append(formattedEmployerWorkTitle).append(formattedWorkLocation).append(formattedWorkDates).append(formattedWorkDescription);

  }

};

work.display();

var projects = {
  projects: [{
    title: "Johanna Zett",
    dates: "2015",
    description: "Johanna Zett was born in 1990 in Leipzig, already came in touch with the Musical genre at the age of 11." + "At the Steintor Varieté in Halle (Saale) she learned her first skills in tapdance and modern jazzdance, singing and acting." + "Besides she received piano and opera vocal lessons.",
    images: ["images/johannazett.jpg"]
  }, {
    title: "Nivot Production",
    dates: "2016",
    description: "The purpose of our production office is to provide high quality, unique programs to our partners and viewers with the widest spectrum of culture." + "Among other things, our mission is to connect the motherland with the Hungarians across the border, including continental distances.",
    images: ["images/nivot_open.jpg"]
  }, {
    title: "Emocean Yoga",
    dates: "2015",
    description: "SUP (stand up paddle board) began its journey in Hawaii and spread all over the world." +
      "During the past two years, it has also become popular in Hungary." +
      "Yoga is an ancient Indian method, which can help us to keep our bodies in good condition, functioning in the right way and helping to prevent disease.",
    images: ["images/emocean_yoga.jpg"]
  }]
};

projects.display = function() {

  for (var i = 0; i < projects.projects.length; i++) {
    $("#projects").append(HTMLprojectStart);


    var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
    var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
    var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);
    var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.projects[i].images);

    for (var j = 0; j < projects.projects[i].images.length; j++) {
      $(".project-entry:last").append(formattedProjectImage);
    }

    $(".project-entry:last").append(formattedProjectTitle).append(formattedProjectDates).append(formattedProjectDescription);

  }
};

projects.display();



var education = {
  schools: [{
      name: "Bessenyei College",
      location: "Nyiregyhaza - Hungary",
      degree: " English literature",
      majors: ["none"],
      dates: "1998-2000",
      image: "images/besi.jpg"
    }

  ],
  onlineCourses: [{
      title: "Frontend development",
      school: "Treehouse",
      dates: "2015-2017",
      url: "http://teamtreehouse.com/szabolcsheteibako2",
      image: "images/treehouse-logo.jpg"
    }, {
      title: "Essentials in JavaScript ES6",
      school: "Udemy",
      dates: "2016-2017",
      url: "https://www.udemy.com/certificate/UC-6AA9OXEI/",
      image: "images/udemy.jpg"
    }, {
      title: "Web Design for Web Developers",
      school: "Udemy",
      dates: "2015-2017",
      url: "https://www.udemy.com/certificate/UC-LF4VD55C/",
      image: "images/udemy.jpg"
    },
    {
      title: "The Complete JavaScript Course",
      school: "Udemy",
      dates: "2015-2017",
      url: "https://www.udemy.com/certificate/UC-JHF66OYQ/",
      image: "images/udemy.jpg"
    },
    {
      title: "Frontend Nanodegree",
      school: "Udacity",
      dates: "2015-2017",
      url: "https://profiles.udacity.com/p/8351743412",
      image: "images/udacity-blue.jpg"
    }

  ]

};

education.display = function() {

  if (education.schools.length > 0) {
    $("#education").append(HTMLschoolStart);
    var formattedOnlineImage = "";

    for (var i = 0; i < education.schools.length; i++) {


      $(".education").append(HTMLschoolContainer);
      var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[i].name);
      var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
      var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
      var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[i].majors);
      var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
      formattedOnlineImage = HTMLonlineImage.replace('%data%', education.schools[i].image);



      $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree).append(formattedSchoolLocation).append(formattedMajor).append(formattedSchoolDates).append(formattedOnlineImage);

    }

    if (education.onlineCourses.length > 0) {

      for (var j = 0; j < education.onlineCourses.length; j++) {
        $(".education").append(HTMLschoolContainer);
        formattedOnlineImage = HTMLonlineImage.replace('%data%', education.onlineCourses[j].image);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[j].school);
        var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[j].dates);
        var formattedOnlineUrl = HTMLonlineURL.replace('%data%', education.onlineCourses[j].url).replace("#", education.onlineCourses[i].url);

        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool).append(formattedOnlineDates).append(formattedOnlineUrl).append(formattedOnlineImage).prepend(HTMLonlineClasses);
      }
    }
  }
};

education.display();

$("#mapDiv").append(googleMap);
