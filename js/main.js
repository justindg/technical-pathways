// $('.tree_home > .col > .role').on('click', function() {
//   $('.modal-home').fadeIn(200);
//
//   var role = $(this).find('.label').text();
//   $('.modal-home > .modal > .content > .title').text(role);
// });

$('.icon_close').on('click', function() {
  $('.modal').parent().hide();
});

var engineering = {
  generic: {
    title: "Technical Pathway Framework",
    description: "The technical pathway is a framework to help support career progression and recognition for both people leaders and more technically focussed individuals. It is not prescriptive but can help you understand how your current skills or role align to other roles within the framework and what you may need to develop to progress or change role.",
    role_tech_1: "Executive Consultant",
    role_tech_2: "Principal Consultant",
    role_tech_3: "Specialist Consultant",
    role_manager_1: "Executive Manager",
    role_manager_2: "Senior Manager",
    role_manager_3: "Manager",
    role_1: "Senior Consultant",
    role_2: "Consultant",
    role_3: "Graduate"
  },
  devops: {
    title: "DevOps Engineering",
    description: "These roles work with development and operations communities to drive velocity and quality of software delivered. DevOps engineers are technical, collaborative, communicative, and enjoy finding efficiencies and therefore are always looking to automate and monitor the process of software integration, testing, deployment, and infrastructure changes.",
    role_tech_1: "Executive Consultant",
    role_tech_2: "Principal Engineer",
    role_tech_3: "Specialist / Domain Engineer",
    role_manager_1: "Executive Manager, Continuous Delivery",
    role_manager_2: "Continuous Delivery Manager",
    role_manager_3: "Technical Delivery Lead",
    role_1: "Senior Engineer",
    role_2: "Engineer",
    role_3: "Graduate / Associate Engineer"
  },
  infra: {
    title: "Infrastructure Engineering",
    description: "These roles collaborate closely with the business to create fit-for-purpose IT infrastructure services that supports the business in its goals. Infrastructure engineers are customer focussed, logical and rational. They apply broad breadth and depth of knowledge to understand requirements, translate metrics into meaningful insights and cohesively integrate IT services. They have specialised knowledge across various technology domains including enterprise data centres, networking, compute hosting, databases, storage, cloud-based services and software defined environments.",
    role_tech_1: "Executive Engineer",
    role_tech_2: "Principal Engineer",
    role_tech_3: "Specialist Engineer",
    role_manager_1: "Executive Manager, Engineering",
    role_manager_2: "Senior Manager, Engineering",
    role_manager_3: "Manager, Engineering",
    role_1: "Senior Engineer",
    role_2: "Engineer",
    role_3: "Graduate / Associate Engineer"
  },
  software: {
    title: "Software Engineering",
    description: "The software engineering roles focus on the delivery of outstanding customer experiences through innovative, well designed and engineered solutions. Software Engineers care deeply and become experts in the full lifecycle of software development. They develop extensive skills and experience not only in languages and frameworks, but also in the underlying and supporting disciplines to design, build, deploy and maintain high-quality, resilient software that is critical to the success of CBA and expected by our customers.",
    role_tech_1: "Chief Engineer",
    role_tech_2: "Principal Engineer",
    role_tech_3: "Specialist Software Engineer",
    role_manager_1: "Executive Manager, Engineering",
    role_manager_2: "Technical Manager",
    role_manager_3: "Lead Software Engineer",
    role_1: "Senior Software Engineer",
    role_2: "Software Engineer",
    role_3: "Graduate / Associate Software Engineer"
  },
  systems: {
    title: "Systems Engineering",
    description: "Lorem ipsum dolor sit amet",
    role_tech_1: "Systems T1",
    role_tech_2: "Systems T2",
    role_tech_3: "Systems T3",
    role_manager_1: "Systems M1",
    role_manager_2: "Systems M2",
    role_manager_3: "Systems M3",
    role_1: "Senior Engineer",
    role_2: "Engineer",
    role_3: "Graduate / Associate Engineer"
  }
}

$('.pathway').on('click', function() {
  $("html, body").animate({ scrollTop: $('.pillar_title').offset().top }, 500);

  if ($(this).hasClass('pathway_devops')) {
    $('.pillar_title').text(engineering.devops.title);
    $('.pillar_description').text(engineering.devops.description);
    $('.role_tech_1 > .role').text(engineering.devops.role_tech_1);
    $('.role_tech_2 > .role').text(engineering.devops.role_tech_2);
    $('.role_tech_3 > .role').text(engineering.devops.role_tech_3);
    $('.role_manager_1 > .role').text(engineering.devops.role_manager_1);
    $('.role_manager_2 > .role').text(engineering.devops.role_manager_2);
    $('.role_manager_3 > .role').text(engineering.devops.role_manager_3);
    $('.role_1 > .role').text(engineering.devops.role_1);
    $('.role_2 > .role').text(engineering.devops.role_2);
    $('.role_3 > .role').text(engineering.devops.role_3);
  } else if ($(this).hasClass('pathway_infra')) {
    $('.pillar_title').text(engineering.infra.title);
    $('.pillar_description').text(engineering.infra.description);
    $('.role_tech_1 > .role').text(engineering.infra.role_tech_1);
    $('.role_tech_2 > .role').text(engineering.infra.role_tech_2);
    $('.role_tech_3 > .role').text(engineering.infra.role_tech_3);
    $('.role_manager_1 > .role').text(engineering.infra.role_manager_1);
    $('.role_manager_2 > .role').text(engineering.infra.role_manager_2);
    $('.role_manager_3 > .role').text(engineering.infra.role_manager_3);
    $('.role_1 > .role').text(engineering.infra.role_1);
    $('.role_2 > .role').text(engineering.infra.role_2);
    $('.role_3 > .role').text(engineering.infra.role_3);
  } else if ($(this).hasClass('pathway_software')) {
    $('.pillar_title').text(engineering.software.title);
    $('.pillar_description').text(engineering.software.description);
    $('.role_tech_1 > .role').text(engineering.software.role_tech_1);
    $('.role_tech_2 > .role').text(engineering.software.role_tech_2);
    $('.role_tech_3 > .role').text(engineering.software.role_tech_3);
    $('.role_manager_1 > .role').text(engineering.software.role_manager_1);
    $('.role_manager_2 > .role').text(engineering.software.role_manager_2);
    $('.role_manager_3 > .role').text(engineering.software.role_manager_3);
    $('.role_1 > .role').text(engineering.software.role_1);
    $('.role_2 > .role').text(engineering.software.role_2);
    $('.role_3 > .role').text(engineering.software.role_3);
  } else if ($(this).hasClass('pathway_systems')) {
    $('.pillar_title').text(engineering.systems.title);
    $('.pillar_description').text(engineering.systems.description);
    $('.role_tech_1 > .role').text(engineering.systems.role_tech_1);
    $('.role_tech_2 > .role').text(engineering.systems.role_tech_2);
    $('.role_tech_3 > .role').text(engineering.systems.role_tech_3);
    $('.role_manager_1 > .role').text(engineering.systems.role_manager_1);
    $('.role_manager_2 > .role').text(engineering.systems.role_manager_2);
    $('.role_manager_3 > .role').text(engineering.systems.role_manager_3);
    $('.role_1 > .role').text(engineering.systems.role_1);
    $('.role_2 > .role').text(engineering.systems.role_2);
    $('.role_3 > .role').text(engineering.systems.role_3);
  }
});

$('.faq-button').on('click', function() {
  $('.modal-faq').fadeIn(200);
});

$('.faq-q').on('click', function() {
  $('.faq-a').hide();
  var thisA = $(this).parent().find('.faq-a');
  if (thisA.is(':hidden')) {
    thisA.show();
  } else {
    thisA.hide();
  }
});

var path = window.location.pathname;

var devopsPdf = {
  role_tech_1: path + "/pdf/DO Executive Consultant.pdf",
  role_tech_2: "/pdf/DO Principal Engineer.pdf",
  role_tech_3: "/pdf/DO Domain Engineer.pdf",
  role_manager_1: "/pdf/DO Executive Consultant.pdf",
  role_manager_2: "/pdf/DO Continuous Delivery Manager.pdf",
  role_manager_3: "/pdf/DO Technical Delivery Lead.pdf",
  role_1: "/pdf/DO Senior Engineer.pdf",
  role_2: "/pdf/DO Engineer.pdf",
  role_3: "/pdf/DO Grad Assoc Engineer.pdf",
}

var infraPdf = {
  role_tech_1: "../pdf/IS Executive Engineer.pdf",
  role_tech_2: "../pdf/IS Principal Engineer.pdf",
  role_tech_3: "../pdf/IS Specialist Engineer.pdf",
  role_manager_1: "../pdf/IS EM Engineering.pdf",
  role_manager_2: "../pdf/IS Senior Manager Engineering.pdf",
  role_manager_3: "../pdf/IS Manager Engineering.pdf",
  role_1: "../pdf/IS Senior Engineer.pdf",
  role_2: "../pdf/IS Engineer.pdf",
  role_3: "../pdf/IS GradAssoc Engineer.pdf",
}

var role_tech_1 = $('.role_tech_1');
role_tech_1.on('click', function() {
  var role = $(this).find('.role').text();
  if (role === engineering.devops.role_tech_1) {
    window.open(devopsPdf.role_tech_1, '_blank');
  } else if (role === engineering.devlops.role_tech_2) {
    window.open(devopsPdf.role_tech_2, '_blank');
  } else if (role === engineering.devlops.role_tech_3) {
    window.open(devopsPdf.role_tech_3, '_blank');
  } else if (role === engineering.devlops.role_manager_1) {
    window.open(devopsPdf.role_manager_1, '_blank');
  } else if (role === engineering.devlops.role_manager_2) {
    window.open(devopsPdf.role_manager_2, '_blank');
  } else if (role === engineering.devlops.role_manager_3) {
    window.open(devopsPdf.role_manager_3, '_blank');
  } else if (role === engineering.devlops.role_1) {
    window.open(devopsPdf.role_1, '_blank');
  } else if (role === engineering.devlops.role_2) {
    window.open(devopsPdf.role_2, '_blank');
  } else if (role === engineering.devlops.role_3) {
    window.open(devopsPdf.role_3, '_blank');
  }
});
