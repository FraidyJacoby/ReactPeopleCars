using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ReactPeopleCars.Data;
using ReactPeopleCars.Web.Models;

namespace ReactPeopleCars.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private string _connectionString;

        public PeopleController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpGet]
        [Route("getpeople")]
        public List<Person> GetPeople()
        {
            var repo = new PeopleCarsRepository(_connectionString);
            return repo.GetPeople();
        }

        [HttpPost]
        [Route("addperson")]
        public void AddPerson(Person person)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            repo.AddPerson(person);
        }

        [HttpPost]
        [Route("addcar")]
        public void AddCar(Car car)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            repo.AddCar(car);
        }

        [HttpGet]
        [Route("getcars")]
        public List<Car> GetCars(int personId)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            return repo.GetCars(personId);
        }

        [HttpPost]
        [Route("deletecars")]
        public void DeleteCars(DeleteCarsViewModel vm)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            repo.DeleteCars(vm.PersonId);
        }
    }
}
