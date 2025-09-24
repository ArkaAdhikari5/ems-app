const employees = [ 
  {
    "id": 1,
    "firstname": "Amit",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Prepare Sales Report",
        "description": "Compile and analyze last month’s sales data.",
        "date": "2025-09-20",
        "category": "Reporting",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Client Follow-up",
        "description": "Email pending clients for project updates.",
        "date": "2025-09-22",
        "category": "Communication",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Team Meeting",
        "description": "Weekly sync-up with the marketing team.",
        "date": "2025-09-23",
        "category": "Meeting",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstname": "Neha",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Update Website Content",
        "description": "Refresh homepage with new product launch details.",
        "date": "2025-09-21",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix Bug #234",
        "description": "Resolve login redirect issue on web app.",
        "date": "2025-09-22",
        "category": "Bug Fix",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Database Backup",
        "description": "Perform weekly database backup.",
        "date": "2025-09-20",
        "category": "Maintenance",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Security Patch",
        "description": "Apply September security updates.",
        "date": "2025-09-25",
        "category": "Security",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 3,
    "firstname": "Rahul",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Research Market Trends",
        "description": "Collect data on current digital marketing trends.",
        "date": "2025-09-21",
        "category": "Research",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Draft Blog Post",
        "description": "Write article on top business growth hacks.",
        "date": "2025-09-24",
        "category": "Content",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "SEO Audit",
        "description": "Check website for broken links and missing meta tags.",
        "date": "2025-09-19",
        "category": "SEO",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "firstname": "Priya",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Customer Survey",
        "description": "Design and distribute survey for customer feedback.",
        "date": "2025-09-23",
        "category": "Feedback",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Prepare Presentation",
        "description": "Create slides for quarterly review meeting.",
        "date": "2025-09-22",
        "category": "Presentation",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Check Inventory",
        "description": "Audit office supply stock levels.",
        "date": "2025-09-20",
        "category": "Operations",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 5,
    "firstname": "Karan",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Lead Generation",
        "description": "Collect leads from LinkedIn campaigns.",
        "date": "2025-09-21",
        "category": "Sales",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Product Demo",
        "description": "Conduct demo for prospective clients.",
        "date": "2025-09-24",
        "category": "Sales",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Follow Up Payments",
        "description": "Reach out to clients with pending invoices.",
        "date": "2025-09-20",
        "category": "Finance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Create Proposal",
        "description": "Draft proposal for new corporate client.",
        "date": "2025-09-23",
        "category": "Sales",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 3,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    }
  }
];


const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }];

export const setLocalStorage = ()=> {
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
   const employees = JSON.parse (localStorage.getItem('employees'))
  const admin = JSON.parse (localStorage.getItem('admin'))
  return {employees, admin}
}
