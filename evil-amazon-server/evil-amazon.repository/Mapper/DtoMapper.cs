using AutoMapper;
using entities.Models;
using evil_amazon.dtos;
using evil_amazon.dtos.Requests;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace evil_amazon.repository.Mapper
{
    public class DtoMapper:Profile
    {
        public DtoMapper()
        {
            CreateMap<Product, ProductDto>().ReverseMap();
            CreateMap<ProductUpsertDto, Product>();
            CreateMap<User, UserDto>().ReverseMap();
            CreateMap<UserUpsertDto, User>();
        }
    }
}
