<?php

namespace App\Services;


use App\Models\Chiller;
use App\Models\Information;
use App\Services\BaseService;

class ChillerService extends BaseService
{

    protected $model;

    public function __construct()
    {
        $this->model = Chiller::class;
    }

    public function storeOrUpdate($data, $id = null)
    {
        try {
            // Call patent method
            return parent::storeOrUpdate($data, $id);
        } catch (\Exception $e) {
            $this->logFlashThrow($e);
        }
    }
}

