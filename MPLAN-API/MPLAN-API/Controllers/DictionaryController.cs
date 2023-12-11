using System;
using System.Data;
using System.Net;
using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MPLAN_API.Contract.Dictionaries;
using MPLAN_API.Core.Dictionaries;
using MPLAN_API.Core.Constants;
using MPLAN_API.Controllers;
using MPLAN_API.Models;
using MPLAN_API.Repositories;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MPLAN_API.Core;
using MPLAN_API.Helpers;
using WebGrease.Css.Ast;

namespace MPLAN_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DictionaryController : ApiControllerBase
    {
        private readonly DictionaryRepository _repo;
        public DictionaryController(DictionaryRepository repo)
        {
            _repo = repo;
        }
      /*  [HttpGet]
		public  string test()
        {
			return "test";
        }*/

		[HttpGet("{dictionary}")]
		[ResponseCache(
		Duration = 2400,
		Location = ResponseCacheLocation.Any,
		VaryByQueryKeys = new[] { "code", "search", "filter", "pageIndex", "pageSize", "lang" },
		VaryByHeader = "Accept-Language")]
		public async Task<IActionResult> GetDictionaryAsync(
		[FromRoute] string dictionary,
		[FromQuery] DictionaryRequest request,
		CancellationToken cancellationToken)
		
		{
			IReadOnlyCollection<DictionaryWithPairAndTotal> sqlResult = (await _repo.GetAsync(
				dictionary,
				request.Code,
				request.Search,
				request.Filter,
				request.PageIndex,
				request.PageSize,
				CurrentLanguage,
				cancellationToken)).ToArray();

			DictionaryResponse response = new(
				sqlResult.SkipLast(1).ToArray(),
				sqlResult.LastOrDefault().Total,
				request.PageIndex,
				request.PageSize);

			return Ok(response);
		}

        [HttpPost("insert-mplan")]
		
		public async Task<IActionResult> insertData(DictionaryClasses model)
        {
			ApplicationUser user = CurrentUser;
			
			var Header = model.Header.ToDataTable();
			var Details = model.Details.ToDataTable();
			
			
			return Ok(await _repo.insertData(Header,Details));

		}
        [HttpPost("get-list-all")]
        public async Task<IActionResult> getMplanList(DateRequest request)
        {
            var result = await _repo.getMplanList(request.FromDate,request.ToDate, request.SignDoc);
            return Ok(result);
        }

		[HttpPost("get-mplan-operation")]
		public async Task<IActionResult> GetMplanOperationById([FromBody] int id)
		{
			
			

			DictionaryClasses data = new DictionaryClasses();
			data.Header = (Mplan_Header)await _repo.SP_MplanOperationHeader(id);
			

			data.Details = (IEnumerable<Mplan_Details>)await _repo.SP_GetMplanOperationDetails(id);
			return Ok(data);
		}

		/*[HttpGet("get-list-all")]
		public async Task<IActionResult> getMplanList(DateTime fromDate, DateTime toDate)
		{
			var result = await _repo.getMplanList();
			return Ok(result);
		}*/







		//[HttpGet("get-list")]
		//public async Task<IActionResult> GetDictionary(
		//  [FromRoute] string dictionary,
		//[FromQuery] DictionaryRequest request,
		//CancellationToken cancellationToken)
		/*public async Task<IActionResult> GetDictionary(string dictionary, string code, string? search, string? filter, int? pageIndex, int? pageSize, string? lang)
        {
            var result = await _repo.GetAsync(dictionary, code, search, filter, pageIndex, pageSize, lang);
            return Ok(result);

        }*/
	}
}
